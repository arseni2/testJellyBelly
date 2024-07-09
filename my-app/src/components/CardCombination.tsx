import React from 'react';
import {ICombination} from "../types.ts";
import {Link} from "react-router-dom";
import ArrowIcon from "../icons/ArrowIcon.tsx";

interface IProps {
	combination: ICombination
}

const CardCombination = ({combination}: IProps) => {
	return (
		<Link to={`${combination?.combinationId}`} className={"p-4 flex flex-col justify-between bg-white rounded-lg shadow-lg min-w-[300px] max-w-[300px]"}>
			<div>
				<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{combination.name}</h5>
				<p className={"font-normal text-gray-500 flex flex-wrap"}>
					{combination.tag.map((tag, i) => {
						return <p key={i}>{tag}</p>
					})}
				</p>
			</div>

			<div className="flex gap-2 items-center justify-end mt-4 hover:text-red-500 transition-all group">
				<p className={"text-sm font-medium"}>Read more</p>
				<ArrowIcon className={"w-3 h-3 group-hover:text-red-500"}/>
			</div>
		</Link>
	);
};

export default CardCombination;