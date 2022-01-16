import React from "react";

// STYLES
import { ContainerSchedule, ContainerItemsMap } from "./style";

import Schedules from "utils/schedules";
// COMPONENTS
import TitleSection from "presentation/components/TitleSection";
import ItemSchedule from "./ItemSchedule";

export function Schedule() {
  return (
    <ContainerSchedule id="schedule">
      <TitleSection title="Programação" />
      <ContainerItemsMap>
        {Schedules.map((elem, id) => {
          return (
            <ItemSchedule
              day={elem.day}
              title={elem.title}
              people={elem.people}
              description={elem.description}
              time={elem.time}
              key={id}
              i={id}
            />
          );
        })}
      </ContainerItemsMap>
    </ContainerSchedule>
  );
}