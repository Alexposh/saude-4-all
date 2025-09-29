import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { InfiniteScrollCustomEvent, IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
  standalone:true,
  imports: [IonicModule, HeaderComponent]
})
export class DoctorProfilePage implements OnInit {

  items: string[] = ["text", "whatever"];

  ngOnInit() {
    // this.generateItems();
  }

  // private generateItems() {
  //   const count = this.items.length + 1;
  //   for (let i = 0; i < 5; i++) {
  //     this.items.push(`Item ${count + i}`);
  //   }
  // }

  // onIonInfinite(event: InfiniteScrollCustomEvent) {
  //   this.generateItems();
  //   setTimeout(() => {
  //     event.target.complete();
  //   }, 500);
  // }
}
