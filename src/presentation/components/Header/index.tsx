import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./style";
import Images from "utils/images";
import SideMenu from "./SideMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);
  function controlSibeMenu() {
    setOpen(!open);
  }
  return (
    <HeaderContainer open={open}>
      <div className="l-background" onClick={() => setOpen(false)}></div>
      <SideMenu open={open} control={controlSibeMenu} />
      <div className="l-header">
        <div
          onClick={() => setOpen(!open)}
          className={open ? "l-header__menu l-header__open" : "l-header__menu"}
        >
          <div className="l-header__menu_burger"></div>
        </div>
        <img src={Images.Logo.src} alt={Images.Logo.alt} />
        <ul className="l-header__item_header">
          <li>
            <a href="#about">Sobre o evento</a>
          </li>
          <li>
            <a href="#subscription">Inscrição</a>
          </li>
          <li>
            <a href="#schedule">Programação</a>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
