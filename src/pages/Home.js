import client from "../contentful";
import MainStructure from "../components/MainStructure";
import Card from "../components/Card";
import AltCard from "../components/AltCard";
import MobileCard from "../components/MobileCard";
import SearchInput from "../components/Inputs/SearchInput";
import { PrincipalButton, OptionsButton } from "../components/Buttons";
import { useEffect, useState } from "react";
import ErrorGenerator from "../components/errors/ErrorGenerator";
import { Auth } from "aws-amplify";
export default function Home() {
  const [moviesBillboard, setMoviesBillboard] = useState([]);
  const [moviesSooner, setMoviesSooner] = useState([]);
  async function user() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user: ", user);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  useEffect(() => {
    async function getMovies() {
      await client
        .getEntries({ content_type: "peliculas" })
        .then((response) => {
          const { billboard, sooner } = response.items.reduce(
            (result, item) => {
              if (item.fields.pronto === false) {
                result.billboard.push(item);
              } else {
                result.sooner.push(item);
              }
              return result;
            },
            { billboard: [], sooner: [] }
          );
          setMoviesBillboard(billboard);
          setMoviesSooner(sooner);
        });
    }
    getMovies();
  }, []);

  const others = [
    {
      fields: {
        id: "1",
        titulo: "Mary Cassatt: Pintando La Mujer Moderna",
        portada: {
          fields: {
            file: {
              url: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/5/9/2/42955-9-esl-CO/46437e3f916f-480x670.jpg",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "Documental",
      },
    },
    {
      fields: {
        id: "2",
        titulo: "Vermeer: La Mayor Exposición",
        portada: {
          fields: {
            file: {
              url: "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/9/8/9/2/42989-1-esl-CO/6843ae778ba8-2_poster_480x670_vermeer.png",
            },
          },
        },
        estreno: "20-Jul-2023",
        genero: "Documental",
      },
    },
  ];
  const ophera = [
    {
      id: "1",
      portada:
        "https://archivos-cms.cinecolombia.com/images/7/3/5/6/16537-8-esl-CO/bd7052b83b92-banners_600x400px_opera.jpg",
    },
  ];
  const ballet = [
    {
      id: "1",
      portada:
        "https://archivos-cms.cinecolombia.com/images/7/2/5/6/16527-15-esl-CO/9da627a01ae5-banners_600x400px_ballet.jpg",
    },
  ];
  const theatre = [
    {
      id: "1",
      portada:
        "https://archivos-cms.cinecolombia.com/images/5/4/5/6/16545-8-esl-CO/d030b0977794-microsoftteams-image-51-.png",
    },
  ];

  return (
    <>
      <MainStructure>
        {/* <ErrorGenerator /> */}
        {/* <OptionsButton action={user}>Autenticar</OptionsButton> */}
        <section className="hidden lg:block">
          <div className="px-6 xl:px-14 py-16">
            <div>
              <p className="text-lg font-roboto font-medium pb-10">
                EN CARTELERA
              </p>
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-y-5 xl:gap-x-6">
                {moviesBillboard.map((movie) => (
                  <div key={movie?.fields?.id + "_pelicula"}>
                    <Card data={movie}></Card>
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
                {moviesSooner.map((movie) => (
                  <div key={movie?.fields?.id + "_pronto"}>
                    <Card data={movie}></Card>
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
            <div className="flex space-x-6 mb-10">
              <div className="w-1/2">
                <p className=" pt-10 pb-5">Otros</p>
                <div className=" grid grid-cols-2 gap-y-5 gap-x-6">
                  {others.map((movie) => (
                    <div key={movie.fields.id + "_otros"}>
                      <Card data={movie} others={true}></Card>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2">
                <p className=" pb-5 pt-10">Opera</p>
                {ophera.map((movie) => (
                  <div key={movie.id + "_opera"}>
                    <AltCard id={movie.id} image={movie.portada}></AltCard>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1/2">
                <p className="text-lg font-medium pb-10">Ballet</p>
                {ballet.map((movie) => (
                  <div key={movie.id + "_ballet"}>
                    <AltCard id={movie.id} image={movie.portada}></AltCard>
                  </div>
                ))}
              </div>
              <div className="w-1/2">
                <p className="text-lg font-medium pb-10">Teatro</p>
                {theatre.map((movie) => (
                  <div key={movie.id + "_teatro"}>
                    <AltCard id={movie.id} image={movie.portada}></AltCard>
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
            {moviesBillboard.map((movie) => (
              <div key={movie?.fields?.id + "_pelicula"}>
                <MobileCard
                  id={movie?.fields?.id}
                  title={movie?.fields?.titulo}
                  o_title={movie?.fields?.titulo_original}
                  image={"https:" + movie?.fields?.portada?.fields?.file?.url}
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
