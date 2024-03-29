import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Patient } from "../types/Patient";
import ProtectedPageLayout from "./layouts/ProtectedPageLayout";
import InfoField from "../components/InfoField";
import { Grid } from "@mui/material";
import { getPatientDetails } from "../api/patient";
import { calculateAge } from "../utils";
import { ERROR_401 } from "../consts";

const PatientDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [patientDetails, setPatientDetails] = useState<Patient | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    getPatientDetails(id)
      .then((res) => {
        setPatientDetails({
          ...res,
          age: calculateAge(res?.birthDate),
        });
      })
      .catch((error) => {
        if (error?.toString() === "Error: " + ERROR_401) {
          // TODO: Can also implement an error boundary in ProtectedPageLayout
          navigate("/");
        }
      });
  }, [id, navigate]);

  const goBackToPatients = () => {
    navigate("/patients");
  };

  return (
    <ProtectedPageLayout
      title={"Patients"}
      onTitleClick={goBackToPatients}
      subtitle={
        !!patientDetails
          ? `${patientDetails?.firstName} ${patientDetails?.lastName}`
          : ""
      }
    >
      <Grid container spacing={2} sx={{ height: "40vh", mt: 10 }}>
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
          {patientDetails?.sex}
        </InfoField>
        <InfoField label={"id"} loading={!patientDetails}>
          {patientDetails?.id}
        </InfoField>
      </Grid>
    </ProtectedPageLayout>
  );
};

export default PatientDetails;
