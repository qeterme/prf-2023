import { Component } from '@angular/core';
import { identicon } from 'minidenticons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  avatarSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.title));
}
