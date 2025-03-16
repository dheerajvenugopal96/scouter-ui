import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

const HeaderSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const SidebarComponent = <div className="card flex justify-content-center">
  <Sidebar visible={showSidebar} onHide={() => setShowSidebar(false)}>
      <h2>Sidebar</h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
  </Sidebar>
</div>
  return (
    <div className="mt-0.5 text-center">
      <i className="pi pi-bars" style={{fontSize: '1.5rem'}} onClick={() => setShowSidebar(true)}></i>
      {SidebarComponent}
    </div>
  )
}

export default HeaderSidebar