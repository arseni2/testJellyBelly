import React from 'react';
import {IMileStone} from "../types.ts";

interface IProps {
	history: IMileStone
}

const CardHistory = ({history}: IProps) => {
	return (
		<div className={"p-4 bg-white rounded-lg shadow-lg max-w-[300px]"}>
			<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{history.year}</h5>
			<p className={"font-normal text-gray-500"}>
				{history.description}
			</p>
		</div>
	);
};

export default CardHistory;