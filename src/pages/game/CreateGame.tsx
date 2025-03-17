import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";

//dummy
import courts from "../../data/courts.json";
import { Calendar } from "primereact/calendar";
import { CreateGameProps } from "../../model/ScouterModels";
import GameService from "../../services/GameService";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router";

const initialState: CreateGameProps = {
  name: "",
  selectedCourt: { id: "", location: "", name: "" },
  gameType: "",
  selectedDate: null,
  selectedTime: null,
};

const gameTypes = ["3v3", "5v5", "7v7", "9v9", "11v11"];

const CreateGame = () => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [gameValues, setGameValues] = useState<CreateGameProps>(initialState);
  const navigate = useNavigate();

  const { username } = useAppSelector((state) => state.auth);

  const courtNames = courts.map((entry) => entry.name);

  const handleCreateGameSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const gameId = new Date().getTime();
    await GameService.createGame({
      id: gameId,
      gameProps: {
        ...gameValues,
        selectedDate: `${gameValues.selectedDate.getDate()}-${gameValues.selectedDate.getMonth()+1}-${gameValues.selectedDate.getFullYear()}`,
        selectedTime: `${gameValues.selectedTime.getHours()}:${gameValues.selectedTime.getMinutes()}`
      },
      createdBy: username,
    });
    navigate(`/game/detail/${gameId}`);
  };

  const handleCourtSelection = (event: DropdownChangeEvent) => {
    const filterSelectedCourt = courts.filter(
      (court) => court.name === event.value
    )[0];
    setGameValues({ ...gameValues, selectedCourt: filterSelectedCourt });
  };

  useEffect(() => {
    const { name, selectedCourt, gameType, selectedDate, selectedTime } =
      gameValues;
    if (name && selectedCourt.id && gameType && selectedDate && selectedTime) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [gameValues]);

  return (
    <div className="p-4">
      <Card title="Create Game">
        <form onSubmit={handleCreateGameSubmit} className="*:mt-4">
          <div>
            <label htmlFor="gamename">Game Name</label>
            <InputText
              id="gamename"
              type="text"
              onChange={(e) =>
                setGameValues({ ...gameValues, name: e.target.value })
              }
              value={gameValues.name}
              aria-describedby="game-help"
              style={{ width: "100%" }}
            />
            <br />
            <small id="game-help">
              Enter a name for your game, eg: Gameday Saturday
            </small>
          </div>
          <div>
            <label htmlFor="gameLocation">Select Location/Court</label>
            <Dropdown
              id="gameLocation"
              value={gameValues.selectedCourt.name}
              onChange={handleCourtSelection}
              options={courtNames}
              optionLabel="courts"
              placeholder="Select a Court"
              className="w-full md:w-14rem"
            />
          </div>
          <div>
            <label htmlFor="gametype">Select Game Type</label>
            <Dropdown
              id="gameType"
              value={gameValues.gameType}
              onChange={(e) =>
                setGameValues({ ...gameValues, gameType: e.value })
              }
              options={gameTypes}
              optionLabel="courts"
              placeholder="Select game type"
              className="w-full md:w-14rem"
            />
          </div>
          <div>
            <label htmlFor="date">Select Date</label>
            <Calendar
              id="date"
              value={gameValues.selectedDate}
              onChange={(e) =>
                setGameValues({
                  ...gameValues,
                  selectedDate: e.value,
                })
              }
              showIcon
              dateFormat="dd-MM-yy"
            />
          </div>
          <div className="ml-2">
            <label htmlFor="time">Select Time</label>
            <Calendar
              value={gameValues.selectedTime}
              onChange={(e) =>
                setGameValues({
                  ...gameValues,
                  selectedTime: e.value,
                })
              }
              showIcon
              timeOnly
              icon={() => <i className="pi pi-clock" />}
              hourFormat="24"
            />
          </div>
          <div className="mt-4">
            <Button type="submit" disabled={isSubmitDisabled}>
              Create Game
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateGame;
