import React, {useEffect} from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {Outlet, useLocation} from "react-router-dom";


const ScrollToTop = () => {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [hash]);

	return null;
};

const MainLayout: React.FC<any> = () => {
	return (
		<div className={"mx-auto max-w-screen-xl"}>
			<ScrollToTop />
			<Header />
				<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;