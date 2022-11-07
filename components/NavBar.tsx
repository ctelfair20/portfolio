import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Logo!</h1>
      </div>
      <Link href="/">
        Home
      </Link>
    </nav>
  );
}

export default NavBar;