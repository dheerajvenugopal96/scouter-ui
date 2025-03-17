import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { useState } from "react";
import AddPlayers from "../player/AddPlayers";

const GamePlayers = () => {
  const [showAddPlayerModal, setShowAddPlayerModal] = useState(false);
  return (
    <>
      <div className="my-2 text-center">
        <Button size="small" onClick={() => setShowAddPlayerModal(true)}>
          Add Players
        </Button>
      </div>
      {showAddPlayerModal && <AddPlayers />}
      <Panel header="Team 1" toggleable>
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          maiores ipsam non odit, neque nihil quaerat cum eos? Vero deserunt
          porro inventore, eligendi provident dicta placeat nihil quidem ea
          laboriosam.
        </p>
      </Panel>
      <div className="w-full p-4 my-4 bg-blue-200 text-center text-2xl font-bold font-black">
        VS
      </div>
      <Panel header="Team 2" toggleable>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Panel>
    </>
  );
};

export default GamePlayers;
