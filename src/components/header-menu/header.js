import "../header-menu/style-header.css";
import perfil from "../../imagens/perfil.svg";
import bag from "../../imagens/sacola.svg";

const menuLinksText = ["Categorias", "Minha Estante", "Favoritos"];
const iconsMenu = [perfil, bag];

function HeaderMenu() {
  return (
    <>
      <ul className="Navlinks">
        {menuLinksText.map((textmenu) => (
          <li className="button-link">
            <p>{textmenu}</p>
          </li>
        ))}
      </ul>
      <ul className="Navlinks">
        {iconsMenu.map((icons) => (
          <li className="button-icons">
            <img src={icons} alt="Carrinho e Icone de perfil"></img>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HeaderMenu;
