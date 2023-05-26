import "../HeaderIcons/style-headericon.css";
import perfil from "../../imagens/perfil.svg";
import bag from "../../imagens/sacola.svg";

const iconsMenu = [perfil, bag];

function HeaderIcon() {
  return (
    <>
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

export default HeaderIcon;
