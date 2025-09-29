import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, HeaderComponent,ReactiveFormsModule],
})
export class LoginPage implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const formData = this.loginForm.value;
    console.log('Form Data:', formData);
    // You can now send formData to your backend or handle it as needed
  }

  showData(){
    console.log("before the test");
    const formData = this.loginForm.value;
    console.log('Form Data:', formData);
    console.log("after the test");
  }
  
  ngOnInit() {
  }

}
