import { useEffect } from "react";
import Glide from "@glidejs/glide";
import icono from "../assets/images/7f650afc63b9-icono-cine-colombia.png";
import mitad from "../assets/images/23127617afa8-miercoles-a-mitad-de-precio.jpg";
import datos from "../assets/images/Datos Usuarios Cineco.png";
import tarjeta from "../assets/images/TARJETA CINECO GRAL.jpg";

export default function CarouselBottom() {
  useEffect(() => {
    const glide = new Glide(".glide-01", {
      type: "carousel",
      perView: 4,
      autoplay: 5000,
      animationDuration: 700,
      breakpoints: {
        1280: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    });
    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-01 relative bg-white py-20">
        <div className="sm:px-16 px-10 ">
          {/*    <!-- Slides --> */}
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className=" glide__slide">
                <img
                  alt="Imagen-carusel-bot"
                  src={icono}
                  className="rounded-lg w-80"
                />
              </li>
              <li className="glide__slide">
                <img
                  alt="Imagen-carusel-bot"
                  src={mitad}
                  className=" rounded-lg w-80"
                />
              </li>
              <li className="glide__slide">
                <img
                  alt="Imagen-carusel-bot"
                  src={datos}
                  className=" rounded-lg w-80"
                />
              </li>
              <li className="glide__slide">
                <img
                  alt="Imagen-carusel-bot"
                  src={tarjeta}
                  className=" rounded-lg w-80"
                />
              </li>
            </ul>
          </div>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute w-full left-0 text-xs px-1 sm:px-6 h-full top-0 flex justify-between "
          data-glide-el="controls"
        >
          <button
            className="text-blue-terciary focus-visible:outline-none flex items-center my-auto justify-center rounded-full transition duration-300  hover:bg-blue-principal hover:text-white h-8 w-8"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="text-blue-terciary focus-visible:outline-none flex items-center my-auto justify-center rounded-full transition duration-300  hover:bg-blue-principal hover:text-white h-8 w-8"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
