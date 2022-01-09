import React from "react";

// STYLES
import { ContainerSchedule, ContainerItemsMap } from "./style";

// COMPONENTS
import TitleSection from "../TitleSection";
import ItemSchedule from "../ItemSchedule";

export default function Schedule() {
  const fakePost = [
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5fbd0871c4f065064fc48282/1637589583754-KCZMQHYPOOOS0WB7DRDB/20211008_084509.png?format=500w",
      title: "ELFAS Project KickOff",
      description:
        "In September 2021, the German Federal Ministry of Education and Research (BMBF) funded joint research project “ELFAS - elastomer-based strain-decoupling to enhance performance of fibre composite components” started.",
      date: "01 Jan. de 2022",
      id: "csdcdsc"
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5fbd0871c4f065064fc48282/1623083052229-U8R1G35Z0SRS7839J8N8/DSC00287-small.jpg?format=500w",
      title: "New Year - New Rig",
      description:
        "To test our flexible N-technology driveshafts in realistic operation conditions, we designed a new testrig: The rotating bending machine (RBM).",
      date: "02 Jan. de 2022",
      id: "csdcdsc"
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5fbd0871c4f065064fc48282/1623082917361-57JOO9AU3SRQB3CRV81E/tobias.jpg?format=500w",
      title: "Introducing Our Team #3: Tobias Mathmann",
      description:
        "If there‘s a conference call between the simulation, the design, the testing and the manufacturing department - at the end of every line, there is Tobias.",
      date: "03 Jan. de 2022",
      id: "csdcdsc"
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5fbd0871c4f065064fc48282/1623082780645-VMXLJ2RCGVUQYWY6AFVV/n-flex-develeopment.jpg?format=500w",
      title: "A Short Article About Our Recent Developments",
      description:
        "Duisburg Ist Echt published a short article about our recent developments.",
      date: "04 Jan. de 2022",
      id: "csdcdsc"
    }
  ];
  return (
    <ContainerSchedule>
      <TitleSection title="Programação" />
      <ContainerItemsMap>
        {fakePost.map((elem, id) => {
          return <ItemSchedule key={id} />;
        })}
      </ContainerItemsMap>
    </ContainerSchedule>
  );
}
