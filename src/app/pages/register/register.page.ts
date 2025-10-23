import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, HeaderComponent],
})
export class RegisterPage implements OnInit {
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  registerPatient(){
    this.router.navigate(['/register-patient'])
  }

  registerDoctor(){
    this.router.navigate(['/register-doctor'])
  }
}
