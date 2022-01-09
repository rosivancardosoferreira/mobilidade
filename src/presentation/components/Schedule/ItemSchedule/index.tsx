import React, { useState } from "react";
import Icons from "utils/icons";

// STYLES
import { ContainerItem } from "./style";

// COMPONENTS
export default function ItemSchedule() {
  const [expand, setExpand] = useState(false);
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
          <p
            className={
              expand
                ? "item__activity_description item__activity_description__open"
                : "item__activity_description item__activity_description__close"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi
            ex, aliquid repellendus corporis labore sint, consectetur deleniti
            fuga natus veniam iure alias? Provident error possimus impedit
            ipsam, molestias eligendi!
          </p>
          <div className="item__time">
            {Icons.time}
            <p className="item__time_desc">13:50</p>
          </div>
        </div>
        <button
          className={
            expand
              ? "item__datas__control item__datas__control__open"
              : "item__datas__control"
          }
          onClick={() => setExpand(!expand)}
        >
          {Icons.control}
        </button>
      </article>
    </ContainerItem>
  );
}
