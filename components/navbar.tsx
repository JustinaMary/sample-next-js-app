import Image from "next/image";
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        <Image
          src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png"
          alt="Logo"
          width={70}
          height={70}
          priority
        ></Image>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/pricing">
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
