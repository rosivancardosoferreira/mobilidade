import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./style";
import Images from "utils/images";
import SideMenu from "./SideMenu";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
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
        <motion.img
          src={Images.Logo.src}
          alt={Images.Logo.alt}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        />
        <ul className="l-header__item_header">
          <motion.li
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#about">Sobre o evento aqui</Link>
          </motion.li>
          <motion.li
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="#subscription">Inscrição</a>
          </motion.li>
          <motion.li
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <a href="#schedule">Programação</a>
          </motion.li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
