import React from "react";

// ASSETS
import Images from "utils/images";
import Icons from "utils/icons";

// COMPONENTS

// STYLES
import { ContainerFooter } from "./style";

export default function Footer() {
  return (
    <ContainerFooter>
      <div className="footer__first__part">
        <article className="footer__realization">
          <span className="footer__title">REALIZAÇÃO</span>
          <article className="footer__item__realization">
            <picture className="footer__logos">
              <img
                src={Images.Icet.src}
                alt={Images.Icet.alt}
                className="footer__logos__img"
              />
            </picture>
            <picture className="footer__logos">
              <img
                src={Images.Ufam.src}
                alt={Images.Ufam.alt}
                className="footer__logos__img"
              />
            </picture>
          </article>
        </article>
        <article className="footer__support">
          <span className="footer__title">APOIO</span>
          <picture className="footer__logos">
            <img
              src={Images.Fapeam.src}
              alt={Images.Fapeam.alt}
              className="footer__logos__img"
            />
          </picture>
        </article>
        <article className="footer__social">
          <span className="footer__title">SIGA-NOS EM</span>
          <nav>
            <ul className="footer__social_medias">
              <li>
                <a href="">{Icons.facebook}</a>
              </li>
              <li>
                <a href="">{Icons.instagram}</a>
              </li>
              <li>
                <a href="">{Icons.youtube}</a>
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div className="footer__last__part">
        <article className="footer__street"></article>
        <article className="footer__credits">
          <p className="footer__description">
            © II Seminário de Mobilidade Urbana de Itacoatiara 2022.{" "}
          </p>
          <a
            href="https://github.com/rosivancardosoferreira"
            target={"_blank"}
            rel="noreferrer"
            className="footer__dev"
          >
            Desenvolvido por Rosivan Cardoso
          </a>
        </article>
      </div>
    </ContainerFooter>
  );
}
