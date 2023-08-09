import blueLogo from "../assets/images/logo_cineco_blue.svg";
export default function Footer() {
  return (
    <>
      <div className="bg-gray-principal text-gray-secondary pt-10 pb-16 w-full font-roboto text-xs hidden lg:flex">
        <div className="w-1/4 ">
          <img
            src={blueLogo}
            width={200}
            height={100}
            className="h-8 ml-10"
            alt="CineCol-logo"
          />
        </div>
        <div className="w-2/4 flex flex-col tracking-wider space-y-16 text-center">
          <p className="">
            Información Legal &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
            Acerca de Cineco &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
            Contáctanos PQRS &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
            Preguntas Frecuentes
          </p>
          <p>© 2023 Grupo 4</p>
        </div>
        <div className="text-center w-1/4">
          <div className="max-w-max mx-auto">
            Síguenos en redes sociales
            <div className=" text-right text-base space-x-4 cursor-pointer">
              <a
                href="https://www.facebook.com/cinecolombiaoficial"
                target="_blank"
              >
                <i className=" hover:text-blue-terciary fab fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/Cine_Colombia" target="_blank">
                <i className=" hover:text-blue-terciary fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/cinecolombia/" target="_blank">
                <i className=" hover:text-blue-terciary fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-principal text-gray-secondary pt-10 pb-16 w-full font-roboto text-xs lg:hidden flex flex-col">
        <div>
          <img
            src={blueLogo}
            width={200}
            height={100}
            className="h-6 mx-auto"
            alt="CineCol-logo"
          />
        </div>
        <div className="flex py-10">
          <p className="w-1/2 tracking-wider pl-8 flex flex-col space-y-1">
            <span>Información Legal</span>
            <span>Acerca de Cineco</span>
          </p>
          <p className="w-1/2 tracking-wider flex flex-col space-y-1">
            <span>Contáctanos PQRS</span>
            <span>Preguntas Frecuentes</span>
          </p>
        </div>
        <div className="max-w-max mx-auto tracking-wider">
          Síguenos en redes sociales
          <div className=" text-center pt-3 text-base space-x-4 cursor-pointer">
            <a
              href="https://www.facebook.com/cinecolombiaoficial"
              target="_blank"
            >
              <i className=" hover:text-blue-terciary fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com/Cine_Colombia" target="_blank">
              <i className=" hover:text-blue-terciary fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/cinecolombia/" target="_blank">
              <i className=" hover:text-blue-terciary fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="text-center pt-10 w-full">
          <p>© 2023 Grupo 4</p>
        </div>
      </div>
    </>
  );
}
