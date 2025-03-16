import { useAppSelector } from "../../redux/store";

const Dashboard = () => {
  const { name } = useAppSelector((state) => state.auth);
  return (
    <>
      
    </>
  );
};

export default Dashboard;
