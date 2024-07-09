import React, {useEffect, useState} from 'react';
import {ICombination} from "../types.ts";
import {getCombinationDetail} from "../api/combination.ts";
import {useParams} from "react-router-dom";

const CombinationDetailPage = () => {
	const [combination, setCombination] = useState<ICombination | null>(null)
	const {id} = useParams()

	useEffect(() => {
		getCombinationDetail(id).then(data => {
			setCombination(data)
		})
	}, [])
	return (
		<div className={"h-[64vh]"}>
			{combination
				? <>
					<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{combination.name}</h5>
					<p className={"font-normal text-gray-500 flex flex-wrap"}>
						{combination.tag.map((tag, i) => {
							return <p key={i}>{tag}</p>
						})}
					</p>
				</>
				:
				<p>loading...</p>
			}
		</div>
	);
};

export default CombinationDetailPage;