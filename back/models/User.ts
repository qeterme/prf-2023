import { Model, Schema, model, InferSchemaType, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  role: string;
  created_at: Date;
}

interface IUserMethods {
  comparePasswords: (password: string) => Promise<boolean>;
  isAdmin: boolean;
}

interface UserModel extends Model<IUser, {}, IUserMethods> {
  register: (user: IUser) => Promise<IUser>;
}

const UserSchema = new Schema<IUser, {}, IUserMethods>({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9]+/.test(v);
      },
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (email: string) => {
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
      },
    },
  },
  role: {
    type: String,
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10).then((hashedPassword) => {
    this.password = hashedPassword;
    next();
  });
});

UserSchema.method("comparePasswords", function comparePasswords(password) {
  return bcrypt.compare(password, this.password);
});

UserSchema.method("isAdmin", function isAdmin() {
  return this.role === "admin";
});

UserSchema.static("register", function register(user: IUser) {
  return user.save();
});

export default model<IUser, UserModel>("User", UserSchema);
