import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  imports: [IonicModule],
})
export class LoaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
