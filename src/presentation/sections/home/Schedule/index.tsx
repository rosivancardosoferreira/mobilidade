import React, { useState } from "react";

// STYLES
import { ContainerSchedule, ContainerItemsMap } from "./style";

import Schedules from "utils/schedules";
// COMPONENTS
import TitleSection from "presentation/components/TitleSection";
import { Modal } from "presentation/components";
import ItemSchedule from "./ItemSchedule";
// import { blockScroll } from "utils/blockScroll";

export function Schedule() {
  const [showModal, setShowModal] = useState(false);
  const [peopples, setPeopples] = useState(Object);
  // useEffect(() => {
  //   blockScroll(showModal);
  // }, [showModal]);
  function handleModal() {
    setShowModal(!showModal);
  }
  return (
    <ContainerSchedule id="schedule">
      <Modal visible={showModal} hiddenModal={handleModal} peoples={peopples} />
      <TitleSection title="Programação" />
      <ContainerItemsMap>
        {Schedules.map((elem, id) => {
          return (
            <ItemSchedule
              day={elem.day}
              title={elem.title}
              people={elem.people}
              time={elem.time}
              key={id}
              i={id}
              showModal={handleModal}
              peopleAct={setPeopples}
            />
          );
        })}
      </ContainerItemsMap>
    </ContainerSchedule>
  );
}
