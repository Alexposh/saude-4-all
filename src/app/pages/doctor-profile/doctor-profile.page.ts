import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class DoctorProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
