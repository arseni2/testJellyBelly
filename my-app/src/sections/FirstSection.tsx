import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from "../sharedComponents/ButtonPrimary.tsx";
import ArrowIcon from "../icons/ArrowIcon.tsx";
import ButtonSecondary from "../sharedComponents/ButtonSecondary.tsx";
import JellyBellyProductImg from "../assets/img/JellyBellyPreviewProduct.png";

const FirstSection = () => {
	return (
		<section className="bg-white mt-[120px]">
			<div className="grid gap-8 grid-cols-12">
				<div className="mr-auto place-self-center col-span-7">
					<h1 className="max-w-2xl mb-6 font-extrabold tracking-tight leading-none text-6xl">
						Sweet Treats for Every Joyful Occasion
					</h1>
					<p className="max-w-2xl font-normal text-gray-500 mb-10 text-lg">
						From classic flavors to innovative creations, candy lovers around the world choose Jelly Belly to sweeten their moments.
					</p>
					<div className={"flex gap-2"}>
						<Link to={"/#bean_section"}>
							<ButtonPrimary className={"flex gap-2 items-center"}>
								See Now
								<ArrowIcon/>
							</ButtonPrimary>
						</Link>
						<Link to={"/#contact_form"}>
							<ButtonSecondary>
								Contact Us
							</ButtonSecondary>
						</Link>
					</div>
				</div>
				<div className="mt-0 col-span-5 flex">
					<img src={JellyBellyProductImg} alt="jelly belly product img"/>
				</div>
			</div>
		</section>
	);
};

export default FirstSection;
