export type SignUpProps = {
    email: string;
    username: string;
    password: string;
  };

  
export const SignUpAction = {
    EMAIL: "EMAIL",
    PASSWORD: "PASSWORD",
    USERNAME: "USERNAME",
  };

export interface ListItemProps{
    id: string;
    title: string;
    link?: string;
    icon?: string;
}

export interface CourtProps {
  id: string;
  name: string;
  location: string;
}

export type CreateGameProps = {
  name: string;
  selectedCourt: CourtProps;
  gameType: string;
  selectedDate: any;
  selectedTime: any;
};

export interface BaseGameProps {
  id: number;
  gameProps: CreateGameProps;
  createdBy: string;
}