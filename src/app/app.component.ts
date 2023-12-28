import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  navigateToPage(pathSegment: string): void {
    this.router.navigateByUrl(pathSegment)
      .then(e => {
        console.log(e);
      }).catch(error => {
      console.log(error);
    })
  }
}
