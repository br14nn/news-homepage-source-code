import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import NavBackdrop from "./NavBackdrop";
import NavItemsContainer from "./NavItemsContainer";
import OpenMenuButton from "./OpenMenuButton";
import NavLogo from "./NavLogo";

type NavMenuDisplayType = {
	navBackdrop: "hidden" | "block";
	navItemsPos: "-right-full" | "right-0";
};

export default function () {
	const [navMenuDisplay, setNavMenuDisplay] = useState<NavMenuDisplayType>({
		navBackdrop: "hidden",
		navItemsPos: "-right-full",
	});
	const [scope, animate] = useAnimate();

	const openNavMenu = (e: React.MouseEvent) => {
		e.preventDefault();

		setNavMenuDisplay({
			navBackdrop: "block",
			navItemsPos: "right-0",
		});
		animate("#navItems", { right: 0 });
	};

	const closeNavMenu = (e: React.MouseEvent) => {
		e.preventDefault();

		setNavMenuDisplay({
			navBackdrop: "hidden",
			navItemsPos: "-right-full",
		});
		animate("#navItems", { right: "-100%" });
	};

	useEffect(() => {
		const autoCloseNavMenu = () => {
			if (window.innerWidth >= 720 && navMenuDisplay.navBackdrop === "block") {
				console.log("Close Nav menu");
				setNavMenuDisplay({
					navBackdrop: "hidden",
					navItemsPos: "-right-full",
				});
				animate("#navItems", { right: "-100%" }, { duration: 0 });
			}
		};

		window.addEventListener("resize", autoCloseNavMenu);
	});

	return (
		<nav ref={scope} className="flex flex-row items-center justify-between">
			<NavLogo />
			<OpenMenuButton onClick={openNavMenu} />
			<NavBackdrop onClick={closeNavMenu} className={navMenuDisplay.navBackdrop} />
			<NavItemsContainer className={navMenuDisplay.navItemsPos} closeNavMenuOnClick={closeNavMenu} />
		</nav>
	);
}
