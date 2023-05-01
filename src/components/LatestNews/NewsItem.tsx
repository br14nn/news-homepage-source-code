export default function (props: { newsTitle: String; children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-y-[1rem]">
			<p className="text-[1.2rem] font-bold text-off-white hover:cursor-pointer hover:text-soft-orange laptop-base:text-[1.5rem]">
				{props.newsTitle}
			</p>
			<p className="text-grayish-blue">{props.children}</p>
		</div>
	);
}
