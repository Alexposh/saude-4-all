import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButton, IonCard } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.page.html',
  styleUrls: ['./register-doctor.page.scss'],
  imports: [IonicModule],
})
export class RegisterDoctorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
