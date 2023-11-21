import { useDoctor } from "../hooks/useDoctor";

const DoctorList = () => {
  const { doctors, isLoading, selectDoctor, selectedDoctor } = useDoctor();

  if (isLoading) return <p>Loading doctors...</p>;

  return (
    <div>
      <h1>Doctors</h1>
      {doctors?.map((doctor) => (
        <p onClick={() => selectDoctor(doctor.id)}>{doctor.name}</p>
      ))}
      {selectedDoctor ? selectedDoctor.name : "No Doctor Selected"}
    </div>
  );
};

export default DoctorList;
