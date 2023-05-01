import CloseMenuIcon from "../../assets/icon-menu-close.svg";

type CloseMenuButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function (props: CloseMenuButtonProps) {
	return (
		<button onClick={props.onClick} className="mb-16 ml-auto block laptop-base:hidden" name="closeNavMenuBtn">
			<img className="h-[1.938rem] w-[2rem]" src={CloseMenuIcon} alt="Nav Icon" />
		</button>
	);
}
