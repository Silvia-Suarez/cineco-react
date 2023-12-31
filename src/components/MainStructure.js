import Navbar from "./Navbar";
import CarouselTop from "./CarouselTop";
import CarouselBottom from "./CarouselBottom";
import Footer from "./Footer";

function MainStructure({
  showCarrouselTop = true,
  showCarrouselBot = true,
  user,
  signOut,
  children,
}) {
  return (
    <>
      <div
        className=" h-screen pt-16 lg:pt-24
      bg-gradient-to-r from-black to-white w-full lg:from-white
      "
      >
        <Navbar authkey={user} signOut={signOut}></Navbar>
        <section className="bg-white w-full lg:rounded-none rounded-t-3xl overflow-auto h-full scrollbar-none">
          {showCarrouselTop && <CarouselTop />}
          {children}
          {showCarrouselBot && <CarouselBottom />}
          <Footer></Footer>
        </section>
      </div>
    </>
  );
}

export default MainStructure;
