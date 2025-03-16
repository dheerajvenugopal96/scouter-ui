import { Button } from "primereact/button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-end justify-center p-4">
      <div className="my-10">
        <Button onClick={() => navigate("/login")}>Get Started</Button>
      </div>
    </div>
  );
};

export default HomePage;
