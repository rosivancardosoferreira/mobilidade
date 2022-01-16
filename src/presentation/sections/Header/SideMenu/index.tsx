import React from "react";
import { ContainetAside } from "./style";
import Icons from "utils/icons";
interface propSideMenu {
  open: boolean;
  control: () => void;
}
export default function SideMenu({ open, control }: propSideMenu) {
  return (
    <ContainetAside open={open}>
      <ul className="l-aside__item">
        <li>
          <a href="#about" onClick={control}>
            {Icons.infos}
            Sobre o evento
          </a>
        </li>
        <li>
          <a href="#subscription" onClick={control}>
            {Icons.added}
            Inscrição
          </a>
        </li>
        <li>
          <a href="#schedule" onClick={control}>
            {Icons.calendar}
            Programação
          </a>
        </li>
      </ul>
    </ContainetAside>
  );
}
