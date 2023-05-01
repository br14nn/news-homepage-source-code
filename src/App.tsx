import TrendingNewsCard from "./components/TrendingNewsCard/TrendingNewsCard";
import FeaturedNews from "./components/FeaturedNews/FeaturedNews";
import LatestNews from "./components/LatestNews/LatestNews";
import Navbar from "./components/Navbar/Navbar";
import RetroPcImage from "./assets/image-retro-pcs-compressed.jpg";
import LaptopKeyboardImage from "./assets/image-top-laptops-compressed.jpg";
import GamepadControllerImage from "./assets/image-gaming-growth-compressed.jpg";

export default function () {
	return (
		<main className="h-full w-full overflow-y-auto bg-off-white px-[1.25rem] py-[3.125rem] laptop-base:px-[3.125rem] desktop-base:px-[6.25rem]">
			<Navbar />

			<div className="mt-[3rem] flex w-full flex-col gap-x-[1.875rem] gap-y-[5rem] desktop-base:flex-row">
				<FeaturedNews />
				<LatestNews />
			</div>

			<div className="mt-[5rem] flex flex-row flex-wrap gap-x-[20px] gap-y-[1.875rem]">
				<TrendingNewsCard srcImg={RetroPcImage} imgAlt="Retro PC image" trendNumber="01" trendTitle="Reviving Retro PCs">
					What happens when old PCs are given modern upgrades?
				</TrendingNewsCard>
				<TrendingNewsCard srcImg={LaptopKeyboardImage} imgAlt="Laptop keyboard image" trendNumber="02" trendTitle="Top 10 Laptops of 2022">
					Our best picks for various needs and budgets.
				</TrendingNewsCard>
				<TrendingNewsCard srcImg={GamepadControllerImage} imgAlt="Gamepad controller image" trendNumber="03" trendTitle="The Growth of Gaming">
					How the pandemic has sparked fresh opportunities.
				</TrendingNewsCard>
			</div>
		</main>
	);
}
