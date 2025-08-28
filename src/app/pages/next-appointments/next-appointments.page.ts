import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-next-appointments',
  templateUrl: './next-appointments.page.html',
  imports: [IonicModule],
  styleUrls: ['./next-appointments.page.scss'],
})
export class NextAppointmentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
