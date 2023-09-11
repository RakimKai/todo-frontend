import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
