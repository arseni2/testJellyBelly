import React from 'react';
import {IFact} from "../types.ts";
import {Link} from "react-router-dom";

interface IProps {
	fact: IFact
}

const CardFact = ({fact}: IProps) => {
	return (
		<Link to={`${fact?.factId}`} className={"p-4 bg-white rounded-lg shadow-lg max-w-[300px]"}>
			<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{fact.title}</h5>
			<p className={"font-normal text-gray-500"}>
				{fact.description}
			</p>
		</Link>
	);
};

export default CardFact;