type NavItemProps = {
	children: React.ReactNode;
};

export default function (props: NavItemProps) {
	return (
		<a
			className="text-clamp-custom-2.1 text-very-dark-blue hover:text-soft-red laptop-base:text-clamp-custom-1 laptop-base:text-dark-grayish-blue"
			href="#"
		>
			{props.children}
		</a>
	);
}
