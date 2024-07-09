import React, {useEffect, useState} from 'react';
import {getFactDetail} from "../api/fact.ts";
import {useParams} from "react-router-dom";
import {IFact} from "../types.ts";

const FactDetailPage = () => {
	let { id } = useParams();
	const [fact, setFact] = useState<IFact | null>(null)

	useEffect(() => {
		getFactDetail(id).then(data => {setFact(data)})
	}, [])
	return (
		<div className={"flex flex-col gap-2 h-[64vh]"}>
			{fact
				? <>
					<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{fact.title}</h5>
					<p className={"font-normal text-gray-500"}>
						{fact.description}
					</p>
				</>

				:
				<p>loading...</p>
			}

		</div>
	);
};

export default FactDetailPage;