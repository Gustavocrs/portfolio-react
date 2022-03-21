import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="wrapMenu">
      <a href="#menu" className="btnMenu btnMenu_open">
        Menu
      </a>

      <ul className="menu" id="menu">
        <li className="btnMenu btnMenu_close">Sair</li>

        <li className="menuItem">
          <a href="#sobremim" className="menuItemAction" id="nav-links">
            Sobre mim
          </a>
        </li>
        <li className="menuItem">
          <a href="#tecnologias" className="menuItemAction" id="nav-links">
            Tecnologias
          </a>
        </li>
        <li className="menuItem">
          <a href="#certificados" className="menuItemAction" id="nav-links">
            Certificados
          </a>
        </li>
        <li className="menuItem">
          <a href="#projetos" className="menuItemAction" id="nav-links">
            Projetos
          </a>
        </li>
        <li className="menuItem">
          <a href="#falecomigo" className="menuItemAction" id="nav-links">
            Fale comigo
          </a>
        </li>
      </ul>
    </nav>
    // <nav classNameName={navbar}>
    //   <ul classNameName={list}>
    //     <li classNameName={item}>
    //       <a href="#sobremim"> Sobre mim</a>
    //     </li>
    //     <li classNameName={item}>
    //       <a href="#tecnologias"> Tecnologias </a>
    //     </li>
    //     <li classNameName={item}>
    //       <a href="#certificados"> Certificados </a>
    //     </li>
    //     <li classNameName={item}>
    //       <a href="#projetos"> Projetos </a>
    //     </li>
    //     <li classNameName={item}>
    //       <a href="#falecomigo"> Fale Comigo </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}