import { sliderData } from "../context/CardData";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSlider() {
  return (
    <div className="" id="portfolio">
      <p className="text-blue-500 border-l-2 pl-2 border-blue-500 font-medium tracking-widest mb-4 mt-20 w-[100%] max-w-[90%] m-auto">
        PORTFOLIO
      </p>

      <div
        className="w-[100%] max-w-[90%] m-auto grid gap-3 pb-16
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sliderData.map((card) => (
          <PortfolioCard key={card.id} data={card} />
        ))}
      </div>

      <div className="container border-b m-auto mb-16"></div>
    </div>
  );
}
