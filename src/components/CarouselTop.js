import { useEffect } from "react";
import Glide from "@glidejs/glide";
import React from "react";

function CarouselTop() {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 5,
      autoplay: 3000,
      gap: 0,
      focusAt: "center",
      animationDuration: 600,
      animationTimingFunc: "ease-in-out",
      breakpoints: {
        1216: {
          perView: 3,
        },
      },
    });
    glide.mount();
    return () => glide.destroy();
  }, []);

  return (
    <div className="glide lg:block hidden bg-gradient-to-b from-black to-white">
      <div
        className="py-10 glide__track bg-gradient from-black to-white  "
        data-glide-el="track"
      >
        <ul className="glide__slides text-center h-114">
          <li
            key={"image-carousel-top-1"}
            className="glide__slide cuadros h-100 my-auto "
          >
            <img
              alt="Imagen-carusel-bot"
              src={
                "https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/8/7/7/2/42778-5-esl-CO/4c340efc46e7-gt-1-poster-carrusel.jpg" ||
                ""
              }
              className="w-full h-full"
            />
          </li>
          <li
            key={"image-carousel-top-2"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <img
              alt="Imagen-carusel-bot"
              src={
                "https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/2/0/4/2/42402-2-esl-CO/7eb4c5e4e4f2-warner_bb_cinecol_575x805.jpg" ||
                ""
              }
              className="w-full h-full"
            />{" "}
          </li>
          <li
            key={"image-carousel-top-3"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <img
              alt="Imagen-carusel-bot"
              src={
                "https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/4/6/1/2/42164-2-esl-CO/88673bcd6e86-lvd_cineco_1-poster-carrusel-foto-_575x805.jpg" ||
                ""
              }
              className="w-full h-full"
            />{" "}
          </li>
          <li
            key={"image-carousel-top-7"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <img
              alt="Imagen-carusel-bot"
              src={
                "https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/6/1/3/3/43316-1-esl-CO/2b49af484e4b-lpdt_postercarrusel_575x805px.jpg" ||
                ""
              }
              className="w-full h-full"
            />{" "}
          </li>
          <li
            key={"image-carousel-top-4"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <img
              alt="Imagen-carusel-bot"
              src={
                "https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/6/3/4/2/42436-3-esl-CO/70eea743f4b2-warner_barbie_cinecol_575x805.jpg" ||
                ""
              }
              className="w-full h-full"
            />{" "}
          </li>
          <li
            key={"image-carousel-top-5"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <img
              alt="Imagen-carusel-bot"
              src={
                "https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/4/0/3/0/40304-6-esl-CO/b400a835e489-tmnt_cineco_1-poster-carrusel-foto-_575x805.jpg" ||
                ""
              }
              className="w-full h-full"
            />{" "}
          </li>
          <li
            key={"image-carousel-top-6"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <img
              alt="Imagen-carusel-bot"
              src={
                "https://archivos-cms.cinecolombia.com/images/_aliases/poster_carousel/8/4/7/3/43748-1-esl-CO/9a48d4d4a649-1_postercarrusel_575x805.jpg" ||
                ""
              }
              className="w-full h-full"
            />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CarouselTop;
