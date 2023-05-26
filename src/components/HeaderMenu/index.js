import "../HeaderMenu/style.css";

const menuLinksText = ["Categorias", "Minha Estante", "Favoritos"];


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
    </>
  );
}

export default HeaderMenu;
