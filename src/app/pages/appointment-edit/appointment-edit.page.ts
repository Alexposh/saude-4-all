import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.page.html',
  styleUrls: ['./appointment-edit.page.scss'],
  imports: [IonicModule],
})
export class AppointmentEditPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
