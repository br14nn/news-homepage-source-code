export default function (props: { children: React.ReactNode }) {
	return (
		<p
			className={`w-full flex-initial text-[12.517vw] font-extrabold leading-none text-very-dark-blue laptop-base:w-[50%] laptop-base:text-[7.506vw] desktop-base:text-[5.208vw]`}
		>
			{props.children}
		</p>
	);
}
