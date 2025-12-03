export interface Appointment{
    id: string;
    doctor: {
        dateOfBirth:string;
        email:string;
        firstName:string;
        gender: string;
        id: string;
        image:string;
        lastName:string;
        specialization:string;

    };
    patientId: string;
    location:{
        city:string;
        country:string;
        id:string;
        name:string;
        number_extension: string;
        street: string;
        street_number: string;
        zip_code:string;
    };
    dateOfAppointment: Date;
    createdAt: Date;
    status:string;
}