import React from "react";
import Container from "../../common/container";
import HeroGif from "../../../assets/gifs/coin.gif";
import Secure from "../../../assets/gifs/ssecure.gif";
import Image from "next/image";
import Cards from "./cards";
import BackGlow from "../../common/backglow";
import HeroBox from "@/app/assets/glassmorphism-boxes/heroBox";
import HeroBoxImg from "../../../assets/glassmorphism-boxes/herobox.png";
import ItemBoxImg from "../../../assets/cards/card.png";
const Hero = () => {
  return (
    <div className="main-hero w-full pt-16 h-auto text-white relative">
      <Container>
        {/* Parıltı Efekti */}
        <div className="absolute w-full flex justify-center items-center z-0">
          <div className="glow w-[500px] h-[500px]"></div>
        </div>

        {/* İçerik */}
        <div className="relative z-10">
          <div className="flex justify-center mb-10">
            <Image
              src={HeroGif}
              alt="Hero GIF"
              className="w-auto lg:h-96 h-48 mt-10"
            />
          </div>

          <div className="flex justify-center">
            <h5 className="w-5/6 text-8xl font-black text-center text-[#a2cdef] relative z-[10] lg:block hidden">
              SECURE THE FUTURE<br></br>OF FINANCE WITH<br></br>PARAD.
            </h5>
            <h5 className="w-full text-4xl font-black text-center text-[#a2cdef] my-16 relative z-[10] lg:hidden flex">
              SECURE THE FUTURE OF FINANCE WITH PARAD.
            </h5>
            {/* <div className="absolute w-full flex items-center justify-center mt-10">
                     <Image
                        src={HeroBoxImg}
                        alt="hero-box"
                        className="opacity-30 max-h-[220px] h-full w-auto"
                     />
                  </div> */}
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="#"
              //className="text-white text-sm bg-[#1f2a3f] px-6 py-2 rounded-full border border-white/[0.15] hover:bg-[#1f2a3f] hover:border-white/[0.5] transition-all"
              className="text-xl text-center text-[#a9c9e2] hover:text-white transition-colors border-2 rounded-full  border-blue-200 bg-[#091728] hover:bg-slate-700 w-[260px] py-[10px]"
            >
              Discover PARAD
            </a>
            <a
              href="https://app.prddao.io"
              target="_blank"
              //className="text-white text-sm bg-[#1f2a3f] px-6 py-2 rounded-full border border-white/[0.15] hover:bg-[#1f2a3f] hover:border-white/[0.5] transition-all"
              className="text-xl text-center text-[#a9c9e2] hover:text-white transition-colors border-2 rounded-full border-blue-200 bg-[#091728] hover:bg-slate-700 w-[260px] py-[10px]"
            >
              Buy PARAD
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
