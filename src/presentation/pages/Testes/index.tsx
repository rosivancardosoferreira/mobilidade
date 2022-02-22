import React, { Component, useState } from "react";

// STYLES
import { ContainerAboutEvent } from "./style";
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
export function Testes() {
  const tabs = [
    { key: 0, title: "tab 1", component: Tab1, currentStyled: "first" },
    { key: 1, title: "tab 2", component: Tab2, currentStyled: "second" },
    { key: 2, title: "tab 3", component: Tab2, currentStyled: "tirsty" }
  ];
  const [current, setCurrent] = useState(tabs[0].key);
  return (
    <ContainerAboutEvent>
      <div className="section__tabs">
        <div className="tab__items">
          {tabs.map((elem, index) => {
            return (
              <div
                className="tab"
                key={index}
                onClick={() => {
                  setCurrent(index);
                  // alert(index);
                }}
              >
                <p>{elem.title}</p>
              </div>
            );
          })}
          <hr className={tabs[current].currentStyled + " line"} />
        </div>
        <button>Salvar</button>
      </div>
      {tabs.map(({ component: Component }, index) => {
        return <Component key={index} />;
      })}
    </ContainerAboutEvent>
  );
}
