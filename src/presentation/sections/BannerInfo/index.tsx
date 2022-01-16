import React from "react";
import Icons from "utils/icons";
import Images from "utils/images";

// STYLES
import { ContainerBannerInfo } from "./style";

export function BannerInfo() {
  return (
    <ContainerBannerInfo>
      <div className="banner__bar__top"></div>
      <article className="banner__article">
        <div className="banner__infos">
          <article className="banner__days">
            <div className="banner__div__title">
              {Icons.doubleArrows}
              <h1 className="banner__title">NOS DIAS</h1>
              {Icons.doubleArrows}
            </div>
            <h2 className="banner__title__days">26, 27, e 28 de JANEIRO</h2>
          </article>

          <article className="banner__images">
            <span className="banner__line"></span>
            <picture className="banner__picture">
              <source
                media="(min-width: 481px) and (max-width: 768px)"
                srcSet={Images.LogoTemaTablet.src}
              />
              <img
                src={Images.LogoTema.src}
                alt={Images.LogoTema.alt}
                className="banner__image__center"
              />
            </picture>
            <span className="banner__line"></span>
          </article>

          <article className="banner__realization">
            <article className="banner__div__realization">
              <span className="banner__realization__title">REALIZAÇÃO</span>
              <article className="banner__realization__images">
                <picture className="banner__realization__logo">
                  <img
                    src={Images.Icet.src}
                    alt={Images.Icet.alt}
                    className="banner__logos"
                  />
                </picture>
                <picture className="banner__realization__logo">
                  <img
                    src={Images.Ufam.src}
                    alt={Images.Ufam.alt}
                    className="banner__logos"
                  />
                </picture>
              </article>
            </article>
            <article className="banner__div__realization">
              <span className="banner__realization__title">APOIO</span>
              <article className="banner__realization__images">
                <picture className="banner__realization__logo">
                  <img
                    src={Images.Fapeam.src}
                    alt={Images.Fapeam.alt}
                    className="banner__logos"
                  />
                </picture>
              </article>
            </article>
          </article>
        </div>
      </article>
      <div className="banner__bar__bottom"></div>
    </ContainerBannerInfo>
  );
}
