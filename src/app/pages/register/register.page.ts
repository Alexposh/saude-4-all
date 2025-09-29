import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, HeaderComponent],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
