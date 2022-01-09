import React from "react";
import { ContainetAside } from "./style";
import Icons from "utils/icons";
interface propSideMenu {
  open: boolean;
}
export default function SideMenu({ open }: propSideMenu) {
  return (
    <ContainetAside open={open}>
      <ul className="l-aside__item">
        <li>
          <a href="">
            {Icons.infos}
            Sobre o evento
          </a>
        </li>
        <li>
          <a href="">
            {Icons.added}
            Inscrição
          </a>
        </li>
        <li>
          <a href="">
            {Icons.calendar}
            Programação
          </a>
        </li>
      </ul>
      {/* <div className="infinite"></div> */}
    </ContainetAside>
  );
}
