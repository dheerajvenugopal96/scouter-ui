import { Button } from "primereact/button";
import headerImage from "../../assets/CreateGame.webp";
import { Card } from "primereact/card";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateGameClick = () => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/game");
    } else {
      navigate("/login");
    }
  };

  const header = (
    <img src={headerImage} className="aspect-square" alt="Manager" />
  );
  const footer = (
    <>
      <Button
        label="Create"
        icon="pi pi-plus"
        onClick={handleCreateGameClick}
      />
    </>
  );
  return (
    <div className="p-4">
      <Card
        title="Create Game"
        subTitle="Create new game for upcoming match"
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">
          Create game and select the number of players, location and position of
          each player. Note: You must be logged in to create a game.
        </p>
      </Card>
    </div>
  );
};

export default Dashboard;
