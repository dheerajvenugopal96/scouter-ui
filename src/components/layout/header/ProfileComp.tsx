import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import HeroImage from "../../../assets/default_avatar.webp";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { useAppSelector } from "../../../redux/store";
import { ListItemProps } from "../../../model/ScouterModels";
import ListItem from "../../ui/list/ListItem";

const items: ListItemProps[] = [
  {
    id: '1',
    title: 'Profile',
    icon: 'pi pi-user',
    link: '/profile'
  },
  {
    id: '2',
    title: 'Logout',
    icon: 'pi pi-power-off',
    link: '/login'
  }
]

const ProfileComp = () => {
  const { username } = useAppSelector((state) => state.auth);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);

  const handleOnSelectListItem = () => {
    setShowProfileSidebar(false);
  };

  const ProfileSidebar = (
    <Sidebar
      position="right"
      visible={showProfileSidebar}
      onHide={() => setShowProfileSidebar(false)}
    >
      <div>
        <div>
          <img src={HeroImage} alt="No Profile Picture" />
        </div>
        <div className="text-center font-bold text-3xl">
          <span>{username}</span>
        </div>
        <div className="mt-4">
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onSelect={handleOnSelectListItem}
            />
          ))}
        </div>
      </div>
    </Sidebar>
  );
  return (
    <div>
      <Avatar
        className="p-overlay-badge"
        image={HeroImage}
        size="normal"
        onClick={() => setShowProfileSidebar(true)}
      >
        <Badge severity="success" />
      </Avatar>
      {ProfileSidebar}
    </div>
  );
};

export default ProfileComp;
