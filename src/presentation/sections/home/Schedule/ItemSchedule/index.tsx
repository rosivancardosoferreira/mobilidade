import { motion } from "framer-motion";
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
  i: number;
}
export default function ItemSchedule({
  day,
  title,
  people,
  description,
  time,
  i
}: ItemScheduleProps) {
  const [expand, setExpand] = useState(false);
  return (
    <ContainerItem
      as={motion.section}
      viewport={{ once: true }}
      initial={{
        opacity: 0,
        translateX: i % 2 === 0 ? -80 : 80
      }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.2, delay: i * 0.2 }}
    >
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
