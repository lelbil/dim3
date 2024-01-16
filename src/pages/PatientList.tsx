import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom'
import { PatientListItem } from "../types/Patient";
import ProtectedPageLayout from "./layouts/ProtectedPageLayout";
import {Box} from "@mui/material";

const tempPatients = [
  {
    id: '1',
    firstName: 'Billel',
    lastName: 'ATTOUCHI',
  },
  {
    id: '2',
    firstName: 'Zoe',
    lastName: 'Hollish',
  },
]

const columns: GridColDef<PatientListItem>[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
]

const PatientList: React.FC = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState<PatientListItem[]>(tempPatients); // []); // TODO: back to [] as initial state and delete temp

  // TODO: add pagination

  useEffect(() => {
    // Fetch patients from the API and set them in state
  }, []);

  // TODO: pagination and sorting (backend)
  return ( // TODO: make row look clickable
    <ProtectedPageLayout title={"Patients"}>
      <Box mt={10} mx={{md: 5}}>
        <DataGrid<PatientListItem>
        rows={patients}
        columns={columns}
        onRowClick={(row) => {
          navigate('/patient/' + row.id)
        }}
        disableColumnMenu
       />
      </Box>
    </ProtectedPageLayout>
  );
};

export default PatientList;
