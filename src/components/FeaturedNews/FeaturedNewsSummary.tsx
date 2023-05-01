import ReadMoreButton from "./ReadMoreButton";

export default function (props: { children: React.ReactNode }) {
	return (
		<div className="flex w-full flex-initial flex-col gap-y-[1.5rem] laptop-base:w-[50%]">
			<p className={`text-dark-grayish-blue laptop-base:text-clamp-custom-2 desktop-base:text-clamp-custom-1`}>{props.children}</p>
			<ReadMoreButton />
		</div>
	);
}
