import React from "react";
import Container from "../../common/container";
import Image from "next/image";
import StakeSVG from "../../../assets/svgs/stake.svg";
import DaoSVG from "../../../assets/svgs/dao.svg";
import LoanSVG from "../../../assets/svgs/loan.svg";

const cards = [
  {
    title: "NFT Stake",
    description: "Stake your NFTs to earn rewards and maximize your potential.",
    link: "https://app.prddao.io/stake",
    img: StakeSVG,
  },
  {
    title: "Parad Dao",
    description:
      "Join the Parad DAO to participate in decentralized decision-making and governance.",
    link: "https://app.prddao.io",
    img: DaoSVG,
  },
  {
    title: "Loan",
    description: "Access decentralized loans easily. Coming soon.",
    link: null,
    img: LoanSVG,
  },
];

const Cards = () => {
  return (
    <div
      className="cards w-full flex flex-col items-center lg:mt-20 mt-5 pt-32"
      id="ecosystem"
    >
      <Container>
        {/* Başlıklar */}
        <div className="text-center mt-10 mb-10">
          <p className="text-xl text-white mb-2">DISCOVER OUR PRODUCTS</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            PARAD ECOSYSTEM
          </h5>
        </div>

        {/* Kartlar */}
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-x-8 gap-y-20 mt-20">
          {cards.map((card, index) => (
            <div
              className={`w-full h-auto relative flex flex-col group transition-all hover:scale-[1.01] duration-300 ${
                index === 2 ? "lg:col-span-2 mx-auto justify-self-center" : ""
              }`}
              key={index}
            >
              <div className="img-container w-full flex items-center justify-center h-[100px]">
                <Image
                  src={card.img}
                  alt={`${card.title} SVG`}
                  className="w-[160px] h-auto object-cover transition-transform duration-300 group-hover:-translate-y-5 group-hover:scale-[1.1]"
                />
              </div>
              <div className="item-box w-full lg:h-[250px] h-[260px] py-6 relative overflow-hidden flex flex-col justify-center gap-4">
                <div className="mini-glow absolute right-0 bottom-20 w-[200px] h-[200px] bg-[#208bdf] rounded-full blur-xl opacity-50 -z-10"></div>
                <div className="mini-glow absolute right-2 bottom-10 w-[150px] h-[150px] bg-[#8fd208] rounded-full blur-xl opacity-50 -z-10"></div>
                <div className="mini-glow absolute left-0 bottom-0 w-[250px] h-[250px] bg-[#a020f0] rounded-full blur-xl opacity-100 -z-10"></div>
                <p className="lg:text-4xl text-3xl font-black text-center text-[#a2cdef]">
                  {card.title.toUpperCase()}
                </p>
                <p className="lg:text-xl text-lg text-center text-[#d0d0d0] px-16">
                  {card.description}
                </p>
                <div className="w-full flex items-center justify-center mt-5">
                  {card.link ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:text-xl text-lg text-center text-[#a9c9e2] hover:text-white transition-colors border-2 rounded-full w-auto border-blue-200 bg-[#091728] hover:bg-slate-700 px-20 py-[10px]"
                    >
                      Learn More
                    </a>
                  ) : (
                    <button
                      className="lg:text-xl text-lg text-center text-[#788fa1] border rounded-[30px] w-auto border-white/10 bg-white/[0.03] px-20 py-[10px]"
                      disabled
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cards;
