import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { IonContent } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  imports: [HeaderComponent, IonicModule]
})
export class WelcomePage implements OnInit {
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  loginPatient(){
    this.router.navigate(['/login'])
  }

  loginDoctor(){
    this.router.navigate(['/login-doctor'])
  }

}
