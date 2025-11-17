export interface AppointmentDto{
    doctorId: string;
    patientId: string | null;
    locationId: string;
    dateOfAppointment: string;
}