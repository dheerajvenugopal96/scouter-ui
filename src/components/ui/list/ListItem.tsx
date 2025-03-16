import { useNavigate } from "react-router";
import { ListItemProps } from "../../../model/ScouterModels";

type ItemProps = {
  item: ListItemProps;
};

const ListItem = ({ item }: ItemProps) => {
  const navigate = useNavigate();

  const handleListLinkClick = (item: ListItemProps) => {
    if (item.title === "Logout") {
      sessionStorage.clear();
    }
    if (item.link) {
      navigate(item.link);
    }
  };
  return (
    <div
      className="p-4"
      onClick={() => {
        handleListLinkClick(item);
      }}
    >
      <i className={item.icon} style={{ fontSize: "1.5rem" }}></i>
      <span className="text-2xl ml-4">{item.title}</span>
    </div>
  );
};

export default ListItem;
