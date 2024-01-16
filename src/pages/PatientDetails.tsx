import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Patient} from "../types/Patient";
import ProtectedPageLayout from "./layouts/ProtectedPageLayout";
import InfoField from "../components/InfoField";
import {Grid} from "@mui/material";

const tempPatient: Patient = {
  id: '1',
  firstName: 'Billel',
  lastName: 'ATTOUCHI',
  age: 27,
  gender: "M",
}

const PatientDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [patientDetails, setPatientDetails] = useState<Patient | null>(tempPatient) //null); // TODO: delete temp

  useEffect(() => {
    // Fetch patient details based on the id from the API and set them in state
  }, [id]);

  const goBackToPatients = () => {
    navigate('/patients')
  }

  return (
    <ProtectedPageLayout title={'Patients'} onTitleClick={goBackToPatients} subtitle={!!patientDetails ? `${patientDetails?.firstName} ${patientDetails?.lastName}` : ''}>
      <Grid container spacing={2} sx={{ height: '40vh', mt: 10 }}>
        <InfoField label={"id"} loading={!patientDetails}>
          {patientDetails?.id}
        </InfoField>
        <InfoField label={"First Name"} loading={!patientDetails}>
          {patientDetails?.firstName}
        </InfoField>
        <InfoField label={"Last Name"} loading={!patientDetails}>
          {patientDetails?.lastName}
        </InfoField>
        <InfoField label={"Age"} loading={!patientDetails}>
          {patientDetails?.age}
        </InfoField>
        <InfoField label={"gender"} loading={!patientDetails}>
          {patientDetails?.gender}
        </InfoField>
      </Grid>
    </ProtectedPageLayout>
  );
};

export default PatientDetails;
