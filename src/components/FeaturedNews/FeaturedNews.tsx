import Web3DesktopImage from "../../assets/image-web-3-desktop.webp";
import Web3MobileImage from "../../assets/image-web-3-mobile.jpg";
import FeaturedNewsSummary from "./FeaturedNewsSummary";
import FeaturedNewsTitle from "./FeaturedNewsTitle";

export default function () {
	return (
		<div className="flex w-full flex-col gap-[1.875rem] desktop-base:w-[70%]">
			<img className="hidden h-auto w-auto laptop-base:block" src={Web3DesktopImage} alt="Web 3 image" />
			<img className="block h-auto w-auto laptop-base:hidden" src={Web3MobileImage} alt="Web 3 image" />
			<section className="flex flex-col gap-y-[1.875rem] laptop-base:flex-row laptop-base:gap-y-0">
				<FeaturedNewsTitle>The Bright Future of Web 3.0?</FeaturedNewsTitle>
				<FeaturedNewsSummary>
					We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really
					fulfilling its promise?
				</FeaturedNewsSummary>
			</section>
		</div>
	);
}
