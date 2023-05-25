import "../logo/style.css";
import logo from "../../imagens/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo AluraBooks"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
