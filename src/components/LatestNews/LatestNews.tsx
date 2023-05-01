import NewsItem from "./NewsItem";

export default function () {
	return (
		<div className="flex max-h-[600px] w-full flex-col gap-y-[2.5rem] overflow-y-auto bg-very-dark-blue px-[1.5rem] py-[2rem] laptop-base:max-h-[1400px] desktop-base:max-h-[42.240vw] desktop-base:w-[30%]">
			<p className="text-[2rem] font-extrabold leading-none text-soft-orange laptop-base:text-[4rem]">New</p>
			<>
				<NewsItem newsTitle={"Hydrogen VS Electric Cars"}>Will hydrogen-fueled cars ever catch up to EVs?</NewsItem>
				<hr className="border-off-white" />
				<NewsItem newsTitle={"The Downsides of AI Artistry"}>What are the possible adverse effects of on-demand AI image generation?</NewsItem>
				<hr className="border-off-white" />
				<NewsItem newsTitle={"Is VC Funding Drying Up?"}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</NewsItem>
				<hr className="border-off-white" />
				<NewsItem newsTitle={"Eu duis ullamco ad."}>
					Magna laborum aliquip ullamco eiusmod dolore consectetur laboris Lorem cupidatat quis ad est deserunt.
				</NewsItem>
				<hr className="border-off-white" />
				<NewsItem newsTitle={"Magna deserunt enim"}>Sit nisi reprehenderit minim nostrud pariatur sint reprehenderit qui ex.</NewsItem>
				<hr className="border-off-white" />
			</>
		</div>
	);
}
