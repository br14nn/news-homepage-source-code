type TrendingNewsCardPropos = {
	srcImg: string;
	imgAlt: string;
	trendNumber: string;
	trendTitle: string;
	children: string;
};

export default function (props: TrendingNewsCardPropos) {
	return (
		<div className="flex w-full flex-col gap-x-[1rem] gap-y-[1.875rem] mobile-base:flex-row laptop-base:w-[550px] laptop-base:gap-x-[1.875rem]">
			<img className="h-auto w-[120px] laptop-base:w-auto" src={props.srcImg} alt={props.imgAlt} />
			<div className="flex flex-col gap-y-[3.338vw] laptop-base:gap-y-[1.5rem]">
				<p className="text-[2rem] font-bold leading-none text-grayish-blue laptop-base:text-[4rem]">{props.trendNumber}</p>
				<a href="#" className="text-clamp-custon-3 font-extrabold leading-none text-very-dark-blue hover:text-soft-red laptop-base:text-[1.5rem]">
					{props.trendTitle}
				</a>
				<p className="text-dark-grayish-blue">{props.children}</p>
			</div>
		</div>
	);
}
