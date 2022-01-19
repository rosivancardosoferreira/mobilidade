import { motion } from "framer-motion";
import React from "react";
import Icons from "utils/icons";

// STYLES
import { ContainerItem } from "./style";

// COMPONENTS
interface ItemScheduleProps {
  day: string;
  title: string;
  people: object;
  time: string;
  i: number;
  showModal: () => void;
  peopleAct: (val: object) => void;
}
export default function ItemSchedule({
  day,
  title,
  people,
  time,
  i,
  showModal,
  peopleAct
}: ItemScheduleProps) {
  const expand = false;
  return (
    <ContainerItem
      as={motion.section}
      viewport={{ once: true }}
      initial={{
        opacity: 0,
        translateX: i % 2 === 0 ? -80 : 80
      }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <article className="item__date">
        <h2 className="item__num">{day}</h2>
        <p className="item__month">jan</p>
      </article>
      <article className="item__datas">
        <div className="item__datas__people">
          <h3 className="item__title_activity">{title}</h3>
          <div className="items__people">
            {Object.values(people).map((elem, id) => (
              <p className="item__people" key={id}>
                {elem.name}
                {id < Object.values(people).length - 1 && <span>-</span>}
              </p>
            ))}
          </div>
          <p
            className={
              expand
                ? "item__activity_description item__activity_description__open"
                : "item__activity_description item__activity_description__close"
            }
          >
            descrição
          </p>
          <div className="item__time">
            {Icons.time}
            <p className="item__time_desc">{time}</p>
          </div>
        </div>
        {Object.values(people).length > 0 && (
          <button
            className={
              expand
                ? "item__datas__control item__datas__control__open"
                : "item__datas__control"
            }
            onClick={() => {
              showModal();
              peopleAct(people);
              // alert(JSON.stringify(people));
            }}
          >
            {Icons.control}
          </button>
        )}
      </article>
    </ContainerItem>
  );
}
