import client from "../contentful";
import MainStructure from "../components/MainStructure";
import Card from "../components/Card";
import AltCard from "../components/AltCard";
import MobileCard from "../components/MobileCard";
import SearchInput from "../components/Inputs/SearchInput";
import { PrincipalButton, OptionsButton } from "../components/Buttons";

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: "peliculas",
  });
  return {
    props: {
      movies_array: response.items,
    },
  };
}
export default function Home() {
  // const movies = movies_array;
  const movies = [
    {
      fields: {
        id_pelicula: "1",
        titulo: "barbie",
        titulo_original: "barbie",
        portada: {
          fields: {
            file: {
              fileName: "9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "comedia",
        duracion: 114,
        clasificacion: "Para todo el Público",
      },
    },
    {
      fields: {
        id_pelicula: "2",
        titulo: "barbie",
        titulo_original: "barbie",
        portada: {
          fields: {
            file: {
              fileName: "9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "comedia",
        duracion: 114,
        clasificacion: "Clasificación Por Confirmar",
      },
    },
    {
      fields: {
        id_pelicula: "3",
        titulo: "barbie",
        titulo_original: "barbie",
        portada: {
          fields: {
            file: {
              fileName: "9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "comedia",
        duracion: 114,
        clasificacion: "Recomendada para Mayores de 12 años",
      },
    },
    {
      fields: {
        id_pelicula: "4",
        titulo: "barbie",
        titulo_original: "barbie",
        portada: {
          fields: {
            file: {
              fileName: "9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "comedia",
        clasificacion: "Exclusiva para Mayores de 15 años",
      },
    },
    {
      fields: {
        id_pelicula: "5",
        titulo: "barbie",
        titulo_original: "barbie",
        portada: {
          fields: {
            file: {
              fileName: "9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "comedia",
        duracion: 114,
        clasificacion: "Para todo el Público",
      },
    },
    {
      fields: {
        id_pelicula: "6",
        titulo: "barbie",
        titulo_original: "barbie",
        portada: {
          fields: {
            file: {
              fileName: "9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "comedia",
        duracion: 114,
        clasificacion: "Para todo el Público",
      },
    },
  ];
  const others = [
    {
      id_pelicula: "1",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      duracion: 114,
      clasificacion: "Para todo el Público",
    },
    {
      id_pelicula: "2",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      duracion: 114,
      clasificacion: "Clasificación Por Confirmar",
    },
  ];
  const ophera = [
    {
      id_pelicula: "1",
      portada: "/bd7052b83b92-banners_600x400px_opera.jpg",
    },
  ];
  const ballet = [
    {
      id_pelicula: "1",
      portada: "/9da627a01ae5-banners_600x400px_ballet.jpg",
    },
  ];
  const theatre = [
    {
      id_pelicula: "1",
      portada: "/d030b0977794-microsoftteams-image-51-.jpeg",
    },
  ];

  return (
    <>
      <MainStructure>
        <section className="hidden lg:block">
          <div className="px-6 xl:px-14 py-16">
            <div>
              <p className="text-lg font-roboto font-medium pb-10">
                EN CARTELERA
              </p>
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-y-5 xl:gap-x-6">
                {movies.map((movie) => (
                  <div key={movie?.fields?.id + "_pelicula"}>
                    <Card
                      id={movie?.fields?.id}
                      title={movie?.fields?.titulo}
                      o_title={movie?.fields?.titulo_original}
                      image={
                        "https:" + movie?.fields?.portada?.fields?.file?.url
                      }
                      date={movie?.fields?.estreno}
                      gender={movie?.fields?.genero}
                      duration={movie?.fields?.duracion}
                      clasification={movie?.fields?.clasificacion}
                    ></Card>
                  </div>
                ))}
              </div>
              <div className="ml-auto w-max pt-14 pb-24">
                <PrincipalButton />
              </div>
            </div>
            <div>
              <p className="text-lg font-roboto font-medium pb-10">PRONTO</p>
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-y-5 xl:gap-x-6">
                {movies.map((movie) => (
                  <div key={movie?.fields?.id + "_otros"}>
                    <Card
                      id={movie?.fields?.id}
                      title={movie?.fields?.titulo}
                      o_title={movie?.fields?.titulo_original}
                      image={
                        "https:" + movie?.fields?.portada?.fields?.file?.url
                      }
                      date={movie?.fields?.estreno}
                      gender={movie?.fields?.genero}
                      duration={movie?.fields?.duracion}
                      clasification={movie?.fields?.clasificacion}
                    ></Card>
                  </div>
                ))}
              </div>
              <div className="ml-auto w-max py-8">
                <PrincipalButton />
              </div>
            </div>
          </div>
          <div className=" bg-gray-principal tracking-wide text-xl font-noto px-6 xl:px-14 py-16">
            CINECO ALTERNATIVO
            <div className="flex space-x-6">
              <div className="w-1/2">
                <p className=" pt-10 pb-5">Otros</p>
                <div className=" grid grid-cols-2 gap-y-5 gap-x-6">
                  {others.map((movie) => (
                    <div key={movie.id_pelicula + "_otros"}>
                      <Card
                        id={movie.id_pelicula}
                        others={true}
                        title={movie.titulo}
                        o_title={movie.titulo_original}
                        image={movie.portada}
                        date={movie.estreno}
                        gender={movie.genero}
                        duration={movie.duracion}
                        clasification={movie.clasificacion}
                      ></Card>
                    </div>
                  ))}
                </div>
                <div className="ml-auto w-max py-8">
                  <PrincipalButton />
                </div>
              </div>
              <div className="w-1/2">
                <p className=" pb-5 pt-10">Opera</p>
                {ophera.map((movie) => (
                  <div key={movie.id_pelicula + "_opera"}>
                    <AltCard
                      id={movie.id_pelicula}
                      image={movie.portada}
                    ></AltCard>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1/2">
                <p className="text-lg font-medium pb-10">Ballet</p>
                {ballet.map((movie) => (
                  <div key={movie.id_pelicula + "_ballet"}>
                    <AltCard
                      id={movie.id_pelicula}
                      image={movie.portada}
                    ></AltCard>
                  </div>
                ))}
              </div>
              <div className="w-1/2">
                <p className="text-lg font-medium pb-10">Teatro</p>
                {theatre.map((movie) => (
                  <div key={movie.id_pelicula + "_teatro"}>
                    <AltCard
                      id={movie.id_pelicula}
                      image={movie.portada}
                    ></AltCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="lg:hidden w-full flex-col flex ">
          <div className="px-9 py-11 space-y-9">
            <SearchInput></SearchInput>
            <div className="flex justify-center w-full h-8 space-x-2">
              <OptionsButton>Cartelera</OptionsButton>
              <OptionsButton>Pronto</OptionsButton>
              <OptionsButton>Cineco Alternativo</OptionsButton>
            </div>
          </div>
          <div className="w-full h-full flex flex-col">
            {movies.map((movie) => (
              <div key={movie?.fields?.id + "_pelicula"}>
                <MobileCard
                  id={movie?.fields?.id}
                  title={movie?.fields?.titulo}
                  o_title={movie?.fields?.titulo_original}
                  image={"/" + movie?.fields?.portada?.fields?.file?.fileName}
                  date={movie?.fields?.estreno}
                  gender={movie?.fields?.genero}
                  duration={movie?.fields?.duracion}
                  clasification={movie?.fields?.clasificacion}
                ></MobileCard>
              </div>
            ))}
          </div>
        </section>
      </MainStructure>
    </>
  );
}
