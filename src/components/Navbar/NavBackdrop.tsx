type NavBackdropProps = {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function (props: NavBackdropProps) {
	return <div onClick={props.onClick} className={`fixed inset-0 h-full w-full bg-black/50 ${props.className}`} />;
}
