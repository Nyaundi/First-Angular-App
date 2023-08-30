import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  message: string = 'Message From Typscript component file';
  imgUrl: string = 'https://www.websitecdn.com/website-com/website-builder-articles/adding-elements/images/add_image.webp'
}
