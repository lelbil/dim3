import { callApi } from "./utils";

export const getPatientList = (page: number, pageSize: number) => {
  return callApi(`/patient-list?page=${page}&pageSize=${pageSize}`);
};

export const getPatientDetails = (id: string) => {
  return callApi("/patients/" + id);
};
