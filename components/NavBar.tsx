import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <h1 className="logo">
        Cynthia-Ann Telfair
      </h1>
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