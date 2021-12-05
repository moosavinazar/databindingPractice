import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  password: string = '';
  retypePassword: string = '';
  isPasswordMatch: boolean = false;

  public onUserNameInputChanged(e: Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }

  public onPasswordChanged(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  public onRetypePasswordChanged(e: Event) {
    this.retypePassword = (<HTMLInputElement>e.target).value;
    this.isPasswordMatch = this.password === this.retypePassword;
  }
}
