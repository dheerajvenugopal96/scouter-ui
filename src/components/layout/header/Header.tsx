import HeaderSidebar from "./HeaderSidebar";
import ProfileComp from "./ProfileComp";

const Header = () => {
 /*
 1. Hamburger
 2. Product Name
 3. Avatar
  */
  return (
    <div className="flex w-full p-5">
        <div className="flex-1/6">
            <HeaderSidebar />
        </div>
        <div className="flex-1/2 text-left">
            <div className="font-bold text-lg">
                Scouter
            </div>
        </div>
        <div className="flex-1/4 text-end">
            <ProfileComp />
        </div>
    </div>
  )
}

export default Header