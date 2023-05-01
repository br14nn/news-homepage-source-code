import CloseMenuButton from "./CloseMenuButton";
import NavItem from "./NavItem";

type NavItemsContainerProps = {
	closeNavMenuOnClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
};

export default function (props: NavItemsContainerProps) {
	return (
		<div
			className={`fixed top-0 flex h-full w-[70%] flex-col gap-x-[3.25rem] gap-y-[2rem] bg-off-white p-[2rem] laptop-base:static laptop-base:w-auto laptop-base:flex-row laptop-base:p-0 ${props.className}`}
			id="navItems"
		>
			<CloseMenuButton onClick={props.closeNavMenuOnClick} />
			<NavItem>Home</NavItem>
			<NavItem>New</NavItem>
			<NavItem>Popular</NavItem>
			<NavItem>Trending</NavItem>
			<NavItem>Categories</NavItem>
		</div>
	);
}
