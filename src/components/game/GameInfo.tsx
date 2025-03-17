import { Card } from "primereact/card";
import { BaseGameProps } from "../../model/ScouterModels";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { useAppSelector } from "../../redux/store";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

type GameInfoProps = {
  gameDetail: BaseGameProps;
};

const GameInfo = ({ gameDetail }: GameInfoProps) => {
  const copyToasterRef = useRef<Toast>(null);

  const { username } = useAppSelector((state) => state.auth);

  const footer = (
    <>
      <Button
        onClick={() =>
          window.open(gameDetail?.gameProps.selectedCourt.location, "_blank")
        }
      >
        Get to Court
      </Button>
    </>
  );

  const handleCopyClick = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      copyToasterRef.current?.show({
        severity: "success",
        summary: "Link Copied",
        life: 1000,
      });
    });
  };
  return (
    <>
      <Card title={`${gameDetail?.gameProps.name}`} footer={footer}>
        <span className="font-bold">Game Type : </span>
        <span>{gameDetail?.gameProps.gameType}</span>
        <br />
        <span className="font-bold">Court : </span>
        <span>{gameDetail?.gameProps.selectedCourt.name}</span>
        <br />
        <span className="font-bold">Date : </span>
        <span>
          {gameDetail?.gameProps.selectedDate}{" "}
          {gameDetail?.gameProps.selectedTime}
        </span>
        <br />
        <span className="font-bold">Created By: </span>
        <span>{gameDetail?.createdBy}</span>
        <br />
      </Card>
      {username === gameDetail?.createdBy && (
        <>
          <div className="my-4">
            <span className="text-2xl font-bold">Invite Friends:</span>
          </div>
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-whatsapp" style={{ color: "green" }}></i>
            </span>
            <InputText value={window.location.href} readOnly />
            <Button label="Copy" onClick={handleCopyClick} />
          </div>
        </>
      )}
      <Toast ref={copyToasterRef} position="bottom-center" />
    </>
  );
};

export default GameInfo;
