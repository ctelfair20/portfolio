import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        Logo!
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
      <button id="resume">Resume</button>
    </nav>
  );
}

export default NavBar;