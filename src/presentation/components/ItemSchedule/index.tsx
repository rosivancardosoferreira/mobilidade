import React from "react";
import Icons from "utils/icons";

// STYLES
import { ContainerItem } from "./style";

// COMPONENTS
export default function ItemSchedule() {
  return (
    <ContainerItem>
      <article className="item__date">
        <h2 className="item__num">10</h2>
        <p className="item__month">jan</p>
      </article>
      <article className="item__datas">
        <div className="item__datas__people">
          <h3 className="item__title_activity">Titulo da paletra</h3>
          <p className="item__people">
            Palestrante: Fula da silva de tal tal tal
          </p>
          <div className="item__time">
            {Icons.time}
            <p className="item__time_desc">13:50</p>
          </div>
        </div>
        {Icons.control}
      </article>
    </ContainerItem>
  );
}
