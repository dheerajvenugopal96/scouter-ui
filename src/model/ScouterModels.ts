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