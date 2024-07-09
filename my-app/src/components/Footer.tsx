import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
	return (
		<footer className={"bg-white mt-[150px] flex flex-col gap-6 py-4"}>
			<div className="flex justify-between">
				<section className="mosuk-grid-section py-4 sm:py-0">

					<p className="font-semibold flex items-center justify-between gap-4 group">
						<span>Contact information</span>
					</p>
					<div className={"block-tablet block-desktop mt-2 flex flex-col gap-2"}>
						<Link to="mailto:example@gmail.com" className='hover:text-primary-500'>example@gmail.com</Link>
						<Link to="tel:89999999" className='hover:text-primary-500'>89999999</Link>
					</div>

				</section>
				<section className="mosuk-grid-section py-4 sm:py-0">
					<p className="font-semibold flex items-center justify-between gap-4 group">
						<span>Shop</span>
					</p>
					<div className={"block-tablet block-desktop mt-2 flex flex-col gap-2"}>
						<Link to="/bean" className='hover:text-primary-500'>All bean</Link>
					</div>
				</section>
				<section className="mosuk-grid-section py-4 sm:py-0">
					<p className="font-semibold flex items-center justify-between gap-4 group">
						<span>My contact</span>
					</p>
					<div className={"block-tablet block-desktop mt-2 flex flex-col gap-2"}>
						<Link to={"mailto:arsenij633@gmail.com"} className='hover:text-primary-500'>arsenij633@gmail.com</Link>
						<Link to={"tel:+7(921)-064-79-95"} className='hover:text-primary-500'>+7(921)-064-79-95</Link>
					</div>
				</section>
				<section className="mosuk-grid-section py-4 sm:py-0">
					<p className="font-semibold flex items-center justify-between gap-4 group">
						<span>Site map</span>
					</p>
					<div className={"block-tablet block-desktop mt-2 flex flex-col gap-2"}>
						<Link to="/bean" className='hover:text-primary-500'>Bean page</Link>
						<Link to="/fact" className='hover:text-primary-500'>Fact page</Link>
						<Link to="/history" className='hover:text-primary-500'>History page</Link>
						<Link to="/recipe" className='hover:text-primary-500'>Recipe page</Link>
						<Link to="/combination" className='hover:text-primary-500'>Combination page</Link>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;