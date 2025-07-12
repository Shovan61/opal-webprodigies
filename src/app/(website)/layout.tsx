import React from "react";
import LandingPageNavbar from "./_components/navbar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="flex flex-col py-2 xl:px-0 container">
			<LandingPageNavbar />
			{children}
		</div>
	);
};

export default Layout;
