import { useEffect } from "react";
import Glide from "@glidejs/glide";

const CarouselTop = () => {
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

      // Agrega otras opciones de configuración según tus necesidades
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
            className="glide__slide cuadros  h-100 my-auto "
          >
            <div className="h-full w-full bg-white rounded-3xl "></div>
          </li>
          <li
            key={"image-carousel-top-2"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <div className="h-full w-full bg-white rounded-3xl "></div>
          </li>
          <li
            key={"image-carousel-top-3"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <div className="h-full w-full bg-white rounded-3xl "></div>
          </li>
          <li
            key={"image-carousel-top-7"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <div className="h-full w-full bg-white rounded-3xl "></div>
          </li>
          <li
            key={"image-carousel-top-4"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <div className="h-full w-full bg-white rounded-3xl "></div>
          </li>
          <li
            key={"image-carousel-top-5"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <div className="h-full w-full bg-white rounded-3xl "></div>
          </li>
          <li
            key={"image-carousel-top-6"}
            className="glide__slide cuadros h-100 my-auto"
          >
            <div className="h-full w-full bg-white rounded-3xl "></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselTop;
