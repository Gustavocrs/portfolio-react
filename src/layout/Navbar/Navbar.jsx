import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="wrapMenu">
      <a
        href="#menu"
        className={
          menuOpen ? 'menuOpen btnMenu btnMenuOpen' : 'btnMenu btnMenuOpen'
        }
        onClick={() => setMenuOpen(true)}
      >
        Menu
      </a>

      <ul className={menuOpen ? 'menuOpen menu' : 'menu'} id="menu">
        <li
          className={
            menuOpen ? 'menuOpen btnMenu btnMenuOpen' : 'btnMenu btnMenuClose'
          }
          onClick={() => setMenuOpen(false)}
        >
          Sair
        </li>

        <li className="menuItem">
          <a
            href="#sobremim"
            className={menuOpen ? 'menuItemAction menuOpen' : 'menuItemAction '}
            onClick={() => setMenuOpen(false)}
            id="nav-links"
          >
            Sobre mim
          </a>
        </li>
        <li className="menuItem">
          <a
            href="#tecnologias"
            className={menuOpen ? 'menuItemAction menuOpen' : 'menuItemAction '}
            onClick={() => setMenuOpen(false)}
            id="nav-links"
          >
            Tecnologias
          </a>
        </li>
        <li className="menuItem">
          <a
            href="#certificados"
            className={menuOpen ? 'menuItemAction menuOpen' : 'menuItemAction '}
            onClick={() => setMenuOpen(false)}
            id="nav-links"
          >
            Certificados
          </a>
        </li>
        <li className="menuItem">
          <a
            href="#projetos"
            className={menuOpen ? 'menuItemAction menuOpen' : 'menuItemAction '}
            onClick={() => setMenuOpen(false)}
            id="nav-links"
          >
            Projetos
          </a>
        </li>
        {/* <li className="menuItem">
          <a href="#falecomigo" className="menuItemAction" id="nav-links">
            Fale comigo
          </a>
        </li> */}
      </ul>
    </nav>
  )
}
