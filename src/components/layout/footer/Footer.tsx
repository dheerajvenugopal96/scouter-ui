const Footer = () => {
  return (
    <div className="flex justify-around bg-blue-200 p-1 *:pt-1">
      <div className="w-1/3 text-center">
        <i className="pi pi-shop" style={{fontSize: '1.5rem'}}></i><br/>
        <span>Home</span>
      </div>
      <div className="w-1/3 text-center">
        <i className="pi pi-plus" style={{fontSize: '1.5rem'}}></i><br/>
        <span>Create</span>
      </div>
      <div className="w-1/3 text-center">
        <i className="pi pi-info" style={{fontSize: '1.5rem'}}></i><br/>
        <span>About</span>
      </div>
    </div>
  );
};

export default Footer;
