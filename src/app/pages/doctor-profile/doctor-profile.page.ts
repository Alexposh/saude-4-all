import { Component, inject, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { InfiniteScrollCustomEvent, IonicModule } from "@ionic/angular";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { KeyValueId } from 'src/app/models/keyValueId';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
  standalone:true,
  imports: [IonicModule, HeaderComponent]
})
export class DoctorProfilePage implements OnInit {

  items: string[] = ["text", "whatever"];
  doctorId:string | null = '';
  doctor: any = {};

  private doctorService = inject(DoctorService);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    this.getDoctor(this.doctorId as string);
    console.log(this.doctorId);
    console.log(this.doctor);
  }

  addImage(imageContent:string){
    console.log("add an image");
    const dtoConstructed:KeyValueId = {
      id: this.doctorId!,
      field: 'image',
      value: imageContent
    }

    this.doctorService.updateOneField(dtoConstructed).subscribe({
      next: response => console.log("success:" + response),
      error: err => console.error("error: ", err)
    });
    // this.doctor = this.doctorService.getDoctorById(dtoConstructed.id);
  }
  getDoctor(id:string){
    this.doctorService.getDoctorById(id).subscribe({
      next: (doctor) =>{
        console.log("getting the doctor");
        this.doctor = doctor;
      },
      error: (error) =>{
        console.log("An error was encountered when searching for the doctor: " + error);
      }
    })
  }
  // addPhoto(imageAdress:String){
  //   let fullImageAddress = `${this.doctorService.standardImageUrl}${imageAdress}`


  // }

  
}
