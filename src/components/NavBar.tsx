import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { itemsLinks } from "../services/api";
import { AuthContext } from "../context/userContext";
import { useCart } from "react-use-cart";

export const NavBar = () => {
  const { totalItems } = useCart();
  const { isAuth, logout } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handlerSearch = () => console.log("buscando...");

  return (
    <nav className="navbar" data-test="navbar-container">
      <div className="navContainer mx-5">
        <NavItemLogo />
        <div
          className={click ? "navContainerItems active" : "navContainerItems"}
        >
          <NavItemSearch handlerSearch={handlerSearch} />
          <NavItemLinks itemsLinks={itemsLinks} setClick={setClick} />
          <NavItemSesion
            isAuth={isAuth}
            logout={logout}
            totalItems={totalItems}
          />
        </div>
        <NavItemToggle click={click} handleClick={handleClick} />
      </div>
    </nav>
  );
};

interface NavItemToggleProps {
  click: boolean;
  handleClick: () => void;
}
interface IItemsLinks {
  name: string;
  path: string;
}
interface NavItemLinksProps {
  setClick: (boolean: boolean) => void;
  itemsLinks: IItemsLinks[];
}
interface NavItemSearchProps {
  handlerSearch: () => void;
}
interface NavItemSesionProps {
  isAuth: boolean;
  logout: () => void;
  totalItems: number;
}
function NavItemToggle(props: NavItemToggleProps) {
  const { click, handleClick } = props;

  return (
    <div className="toggleMenu" onClick={handleClick}>
      {click ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
    </div>
  );
}
function NavItemSesion(props: NavItemSesionProps) {
  const { isAuth, logout, totalItems } = props;
  return (
    <div className="CartAndButtonContainer">
      <Link to={"/cart"}>
        <div>
          <i className="bi bi-cart fs-3"></i>
          <span className="badge bg-secondary">{totalItems}</span>
        </div>
      </Link>

      {!isAuth ? (
        <div className="d-flex align-items-center gap-2">
          <div>
            <Link to={"/signIn"}>
              <button
                type="button"
                onClick={logout}
                className=" m-0  btn btn-outline-secondary"
              >
                Ingresar
              </button>
            </Link>
          </div>

          <div>
            <Link to={"/signUp"}>
              <button
                type="button"
                onClick={logout}
                className=" m-0  btn btn-secondary"
              >
                Registrarse
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Link to={"/signUp"}>
            <button
              type="button"
              onClick={logout}
              className=" m-0  btn btn-outline-secondary"
            >
              Desconectar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

function NavItemLinks(props: NavItemLinksProps) {
  const { itemsLinks, setClick } = props;

  const location = useLocation();
  return (
    <div className="nav-menu ">
      <>
        {itemsLinks.map((link, index) => {
          return (
            <Link
              to={`/${link.path}`}
              onClick={() => setClick(false)}
              key={index}
            >
              <div className="nav-item">
                <p
                  data-test=""
                  className={`nav-links m-0 ${
                    location.pathname === `/${link.path}` ? "active-link" : ""
                  }`}
                >
                  {link.name}
                </p>
              </div>
            </Link>
          );
        })}
      </>
    </div>
  );
}
function NavItemSearch(props: NavItemSearchProps) {
  const { handlerSearch } = props;

  return (
    <div className="SearchBarContainer">
      <div className="form w-100" style={{ height: "38px" }}>
        <input type="search" placeholder="Buscar" className="search-field" />
        <button type="submit" className="search-button" onClick={handlerSearch}>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
}
function NavItemLogo() {
  return (
    <Link to={"/"}>
      <div>
        <img
          style={{ width: "50px", marginRight: "30px" }}
          src="https://www.zarla.com/images/zarla-art-bag-1x1-2400x2400-20210908-v6vd3khm9bqvq9bp4gxm.png?crop=1:1,smart&width=250&dpr=2"
          alt="logo"
          data-test="logo-nav"
        />
      </div>
    </Link>
  );
}
