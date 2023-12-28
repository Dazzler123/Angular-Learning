import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: string = "";

  setData(value: string): void {
    alert("Typed Text : " + value);
  }

  printData(): void {
    console.log(this.data);
  }
}
