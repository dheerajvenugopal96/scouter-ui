import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BaseGameProps } from "../../model/ScouterModels";
import { TabPanel, TabView } from "primereact/tabview";
import GameInfo from "../../components/game/GameInfo";
import GamePlayers from "../../components/game/GamePlayers";

const GameDetail = () => {
  const params = useParams();
  const [gameDetail, setGameDetail] = useState<BaseGameProps>();
  
  useEffect(() => {
    const game = JSON.parse(localStorage.getItem("games")!);
    setGameDetail(game.filter((data: any) => data.id == params.id)[0]);
  }, []);

  return (
    <TabView>
    <TabPanel header="Game Info">
        {gameDetail && <GameInfo gameDetail={gameDetail}/>}
    </TabPanel>
    <TabPanel header="Players">
        <GamePlayers />
    </TabPanel>
</TabView>
        
  );
};

export default GameDetail;
