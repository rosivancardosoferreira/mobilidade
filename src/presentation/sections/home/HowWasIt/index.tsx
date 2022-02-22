import React, { Fragment } from "react";

// COMPONENTS
import TitleSection from "presentation/components/TitleSection";

// STYLES
import { ContainerHowWasIt, ContainerItemsMap } from "./style";

export function HowWasIt() {
  const Videos = [
    {
      title: "ABERTURA do II Seminário Mobilidade Urbana",
      description: "Transmitido ao vivo em 26 de jan. de 2022",
      src: "https://www.youtube.com/embed/Ii9FoAN_jQU"
    },
    {
      title:
        "PALESTRAS: Agenda 2030 para Itacoatiara e Os acidentes de trânsito em Itacoatiara",
      description: "Transmitido ao vivo em 26 de jan. de 2022",
      src: "https://www.youtube.com/embed/5Rba4CQ42ak"
    },
    {
      title: "Planejamento urbano e a dinámica das cidades amazónicas",
      description: "Transmitido ao vivo em 26 de jan. de 2022",
      src: "https://www.youtube.com/embed/A_XIipI3xuk"
    },
    {
      title: "II Seminário Mobilidade Urbana",
      description: "Transmitido ao vivo em 26 de jan. de 2022",
      src: "https://www.youtube.com/embed/vIWBmu1F75M"
    },
    {
      title:
        "l PARTE DO SEGUNDO DIA DO ll SEMINARIO DE MOBILIDADE URBANA DE ITACOATIARA",
      description: "Transmitido ao vivo em 27 de jan. de 2022",
      src: "https://www.youtube.com/embed/LPIRvxPLyFg"
    },
    {
      title:
        "ll PARTE DO 2º DIA DO ll SEMINARIO DE MOBILIDADE URBANA DE ITACOATIARA",
      description: "Transmitido ao vivo em 27 de jan. de 2022",
      src: "https://www.youtube.com/embed/cr9pJZ3r2sU"
    },
    {
      title:
        "lll PARTE DO 2º DIA DO ll SEMINARIO DE MOBILIDADE URBANA DE ITACOATIARA",
      description: "Transmitido ao vivo em 27 de jan. de 2022",
      src: "https://www.youtube.com/embed/neeBb9sAmd8"
    },
    {
      title:
        "3º DIA E ENCERRAMENTO DO ll SEMINARIO DE MOBILIDADE URBANA DE ITACOATIARA",
      description: "Transmitido ao vivo em 28 de jan. de 2022",
      src: "https://www.youtube.com/embed/Bhi6dmHJoSk"
    },
    {
      title: "AM010-Mobilidade Urbana",
      description: "Transmitido ao vivo em 29 de jan. de 2022",
      src: "https://www.youtube.com/embed/LtJQVrIrhjI"
    },
    {
      title: "Pedalada - Mobilidade Urbana",
      description: "Transmitido ao vivo em 29 de jan. de 2022",
      src: "https://www.youtube.com/embed/5JVlY9Icp9M"
    }
  ];

  return (
    <ContainerHowWasIt id="download">
      <TitleSection title="Registros do evento" />
      <ContainerItemsMap>
        {Videos.map((elem, id) => {
          return (
            <article key={id} className="video__map">
              <div className="box__item__video">
                <iframe
                  src={elem.src}
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="item__video"
                ></iframe>
              </div>
              <h2 className="title__video"> {elem.title}</h2>
              <p className="description__video">{elem.description}</p>
            </article>
          );
        })}
      </ContainerItemsMap>
    </ContainerHowWasIt>
  );
}
