import { Component, inject, Input, OnInit } from '@angular/core';
import { IonButtons, IonToolbar } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule],
})
export class HeaderComponent  implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
