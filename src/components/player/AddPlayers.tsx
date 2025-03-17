import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import playerPositions from '../../data/positions.json';
import { Card } from "primereact/card";

const options = ["Team 1","Team 2"];

interface AddPlayerFields {
    name: string,
    position: string
}

const initialState:AddPlayerFields = {
    name: '',
    position:''
}
//todo
const AddPlayers = () => {
  const [visible, setVisible] = useState(true);
  const [selection, setSelection] = useState("Team 1");

  const [team1Players, setTeam1Players] = useState<AddPlayerFields[]>([initialState]);
  const [team2Players, setTeam2Players] = useState<AddPlayerFields[]>([initialState]);

  return (
    <Dialog
      header="Header"
      visible={visible}
      style={{ width: "90vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
        <SelectButton value={selection} onChange={(e) => setSelection(e.value)} options={options} />

        {selection === 'Team 1' && team1Players.map((field:AddPlayerFields,index:number) => (
            <Card>
                <div>
                    <label className="font-bold my-1" htmlFor="playername">Player Name:</label>
                    <InputText id="playername" type="text" style={{width: '100%'}} />
                </div>
                <div>
                    <label className="font-bold my-1" htmlFor="playerposition">Player Position:</label>
                    <Dropdown
                                  id="playerposition"
                                  value={field.position}
                                  onChange={(e) =>
                                    console.log('something here')
                                  }
                                  options={playerPositions}
                                  optionLabel="courts"
                                  placeholder="Select game type"
                                  className="w-full md:w-14rem"
                                />
                </div>
                </Card>
        ))}
    </Dialog>
  );
};

export default AddPlayers;
