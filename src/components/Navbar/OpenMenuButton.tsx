import OpenNavMenuIcon from "../../assets/icon-menu.svg";

type OpenMenuButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function (props: OpenMenuButtonProps) {
	return (
		<button onClick={props.onClick} className="block laptop-base:hidden" name="openNavMenuBtn">
			<img className="h-[1.063rem] w-[2.5rem]" src={OpenNavMenuIcon} alt="Nav Icon" />
		</button>
	);
}
