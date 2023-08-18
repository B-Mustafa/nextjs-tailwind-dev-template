import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar flex justify-center align-center text-center p-color">
      <div className="navbar-items ">
        <ul className="flex flex-row">
          <li className="p-3">
            <Link href="/">Home</Link>
          </li>
          <li className="p-3">
            <Link href="/">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
