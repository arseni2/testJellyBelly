import React from 'react';
import ButtonPrimary from "../sharedComponents/ButtonPrimary.tsx";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav className="bg-white border-gray-200 py-2.5">
			<div className="flex flex-wrap justify-between items-center">
				<Link to="/" className="flex items-center">
					<img src="https://cdn-tp1.mozu.com/9046-m1/cms/files/1de6e67e-4768-45de-8bce-8f95dbd7a031?max=114" className="mr-3 h-12" alt="JellyBelly Logo"/>
				</Link>
				<div className="flex items-center lg:order-2">
					<Link to="/#bean_section">
						<ButtonPrimary>See more</ButtonPrimary>
					</Link>
				</div>
				<div className="justify-between items-center flex w-auto order-1">
					<ul className="flex font-medium flex-row space-x-8 mt-0">
						<li>
							<NavLink className={({ isActive }) =>
								isActive ? "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent p-0 text-primary-600" : "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent text-gray-800 p-0 hover:text-primary-600"
							} to="/bean" aria-current="page">Beans</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent p-0 text-primary-600" : "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent text-gray-800 p-0 hover:text-primary-600"
								}
								to="/fact" aria-current="page">Facts</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent p-0 text-primary-600" : "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent text-gray-800 p-0 hover:text-primary-600"
								}
								to="/recipe" aria-current="page">Recipes</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent p-0 text-primary-600" : "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent text-gray-800 p-0 hover:text-primary-600"
								}
								to="/combination" aria-current="page">Combinations</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent p-0 text-primary-600" : "transition-all block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent text-gray-800 p-0 hover:text-primary-600"
								}
								to="/history" aria-current="page">History</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
