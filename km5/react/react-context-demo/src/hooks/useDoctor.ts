import { useContext } from "react";
import { DoctorContext } from "../contexts/DoctorProvider";

export const useDoctor = () => useContext(DoctorContext);
