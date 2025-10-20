export interface AppointmentDto{
    doctor_id: string;
    patient_id: string | null;
    location_id: string;
    date_of_appointment: string;
}