export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
}

export type PatientListItem = Pick<Patient, "id" | "firstName" | "lastName">