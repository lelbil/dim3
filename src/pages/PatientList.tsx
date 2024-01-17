import React, { useCallback, useEffect, useState } from "react";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ProtectedPageLayout from "./layouts/ProtectedPageLayout";
import { getPatientList } from "../api/patient";
import { PatientListItem } from "../types/Patient";
import { ERROR_401 } from "../consts";

const columns: GridColDef<PatientListItem>[] = [
  {
    field: "firstName",
    headerName: "First name",
    width: 220,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 220,
  },
  {
    field: "id",
    headerName: "ID",
    width: 330,
  },
];

const PatientList: React.FC = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState<PatientListItem[]>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });
  const [patientCount, setPatientCount] = useState(0);

  const fetchPatients = useCallback(async () => {
    const result = await getPatientList(
      paginationModel.page,
      paginationModel.pageSize,
    );
    const list = result?.content || []; // TODO: show error

    setPatients(list);
    setPatientCount(result?.totalElements || 0);
  }, [paginationModel.page, paginationModel.pageSize]);

  useEffect(() => {
    fetchPatients().catch((error) => {
      console.log("CATCHING AGAIN", error);
      if (error?.toString() === "Error: " + ERROR_401) {
        // TODO: Can also implement an error boundary in ProtectedPageLayout
        navigate("/");
      }
    });
  }, [fetchPatients, navigate]);

  return (
    // TODO: make row look clickable
    <ProtectedPageLayout title={"Patients"}>
      <Box mt={10} mx={{ md: 5 }}>
        <DataGrid<PatientListItem>
          rows={patients}
          columns={columns}
          onRowClick={(row) => {
            navigate("/patient/" + row.id);
          }}
          disableColumnMenu
          pagination
          paginationMode="server"
          pageSizeOptions={[5, 10, 25]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowCount={patientCount}
        />
      </Box>
    </ProtectedPageLayout>
  );
};

export default PatientList;
