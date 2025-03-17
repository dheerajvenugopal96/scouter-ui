import { BaseGameProps } from "../model/ScouterModels";

const GameService = {
  createGame: (data: BaseGameProps) => {
    if (localStorage.getItem("games")) {
      const games = JSON.parse(localStorage.getItem("games")!);
      games.push(data);
      localStorage.setItem("games", JSON.stringify(games));
    } else {
      localStorage.setItem("games", JSON.stringify([data]));
    }
    return Promise.resolve({ status: "200" });
  },
};

export default GameService;
