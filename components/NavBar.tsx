import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Logo!</h1>
      </div>
      <Link href="/">
        About
      </Link>
      <Link href="/Pokepage/pokedex">
        Projects
      </Link>
      <Link href="/">
        Contact
      </Link>
      <button>Resume</button>
    </nav>
  );
}

export default NavBar;