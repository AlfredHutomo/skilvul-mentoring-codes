import { ReactNode, createContext, useState } from "react";
import { useMutation, useQuery } from "react-query";

type Doctor = {
  education: string;
  experience: string[];
  hospital: string;
  id: string;
  images: string;
  info: string;
  name: string;
  skd: number;
  specialist: string;
  status: boolean;
};

interface DoctorContextState {
  doctors?: Doctor[];
  activeDoctor?: Doctor[];
  isLoading: boolean;
  selectedDoctor?: Doctor;
  selectDoctor: (id: string) => void;
}

export const DoctorContext = createContext<DoctorContextState>({
  isLoading: false,
  selectDoctor: (id) => id,
});

const getDoctors = () =>
  fetch("https://6525187f67cfb1e59ce69680.mockapi.io/doctor").then((response) =>
    response.json()
  );

const getDoctor = (id?: string) => {
  if (!id) return;

  return fetch(`https://6525187f67cfb1e59ce69680.mockapi.io/doctor/${id}`).then(
    (response) => response.json()
  );
};

const DoctorProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>();
  const { data, isLoading } = useQuery<Doctor[]>("doctors", getDoctors);

  const doctorQuery = useQuery(`doctor-${selectedDoctorId}`, () =>
    getDoctor(selectedDoctorId)
  );

  const activeDoctor = data?.filter((doctor) => doctor.status);

  const selectDoctor = (id: string) => setSelectedDoctorId(id);

  return (
    <DoctorContext.Provider
      value={{
        doctors: data,
        isLoading,
        activeDoctor,
        selectDoctor,
        selectedDoctor: doctorQuery.data,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;
