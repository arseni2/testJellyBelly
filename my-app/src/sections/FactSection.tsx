import React, {useEffect, useState} from 'react';
import CardHistory from "../components/CardHistory.tsx";
import {getFacts} from "../api/fact.ts";
import {IFact, IPaginatedGeneric} from "../types.ts";
import CardFact from "../components/CardFact.tsx";

const FactSection = () => {
	const [facts, setFacts] = useState<IPaginatedGeneric<IFact> | null>(null)
	
	useEffect(() => {
		getFacts({pageSize: 9, pageIndex: 1}).then(data => {
			setFacts(data)
		})
	}, [])
	return (
		<section className="bg-white mt-[120px] flex flex-col gap-6">
			<h2 className={"mb-4 text-4xl  font-extrabold text-gray-900"}>
				<span className={"text-primary-500"}>Facts</span> about Jelly Belly
			</h2>

			<div className={"flex gap-4 flex-wrap"}>
				{facts?.items && facts.items.map((fact, i) => {
					return <CardFact key={i} fact={fact}/>
				})}
			</div>
		</section>
	);
};

export default FactSection;