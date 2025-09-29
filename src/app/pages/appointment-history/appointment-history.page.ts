import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component"; 

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.page.html',
  styleUrls: ['./appointment-history.page.scss'],
  imports: [IonicModule, HeaderComponent],
})
export class AppointmentHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
