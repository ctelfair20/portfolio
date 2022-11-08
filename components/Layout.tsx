import NavBar from "./NavBar";

interface PropsI {
  // This component only receives one prop -- an array of children
  children: JSX.Element | JSX.Element[]
};

const Layout = ({ children }: PropsI) => {
  return (
    <div className="content">
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;