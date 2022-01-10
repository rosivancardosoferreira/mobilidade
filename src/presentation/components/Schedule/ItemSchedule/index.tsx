import React, { useState } from "react";
import Icons from "utils/icons";

// STYLES
import { ContainerItem } from "./style";

// COMPONENTS
interface ItemScheduleProps {
  day: string;
  title: string;
  people: string;
  description: string;
  time: string;
}
export default function ItemSchedule({
  day,
  title,
  people,
  description,
  time
}: ItemScheduleProps) {
  const [expand, setExpand] = useState(false);
  return (
    <ContainerItem>
      <article className="item__date">
        <h2 className="item__num">{day}</h2>
        <p className="item__month">jan</p>
      </article>
      <article className="item__datas">
        <div className="item__datas__people">
          <h3 className="item__title_activity">{title}</h3>
          <p className="item__people">{people}</p>
          <p
            className={
              expand
                ? "item__activity_description item__activity_description__open"
                : "item__activity_description item__activity_description__close"
            }
          >
            {description}
          </p>
          <div className="item__time">
            {Icons.time}
            <p className="item__time_desc">{time}</p>
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
