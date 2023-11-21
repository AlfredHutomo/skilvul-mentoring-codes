import { useDoctor } from "../hooks/useDoctor";

const ActiveDoctorList = () => {
  const { activeDoctor, isLoading } = useDoctor();

  if (isLoading) return <p>Loading doctors...</p>;

  return (
    <div>
      <h1>Active Doctors</h1>
      {activeDoctor?.map((doctor) => (
        <p>{doctor.name}</p>
      ))}
    </div>
  );
};

export default ActiveDoctorList;
