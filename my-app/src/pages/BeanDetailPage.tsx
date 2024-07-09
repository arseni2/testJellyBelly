import React, {useEffect, useState} from 'react';
import {getBeanDetail} from "../api/bean.ts";
import {useParams} from "react-router-dom";
import {IBean} from "../types.ts";
import CheckPlusIcon from "../icons/CheckPlusIcon.tsx";

const BeanDetailPage = () => {
	let {id} = useParams();
	const [bean, setBean] = useState<IBean | null>(null)

	useEffect(() => {
		getBeanDetail(id).then(data => {
			setBean(data)
		})
	}, [])
	return (
		<div className={"grid grid-cols-2 gap-4 mt-[70px]"}>
			{bean
				? <>
					<img src={bean.imageUrl} alt="bean img"/>
					<div>
						<h2 className={"text-gray-900 font-bold text-2xl mb-2"}>{bean.flavorName}</h2>
						<div className={"flex gap-4 mt-3 mb-3 "}>
							<div className={"flex gap-1 items-center"}>
								<CheckPlusIcon/>
								<p className={"text-sm"}>{bean.sugarFree ? "no sugar" : "yes sugar"}</p>
							</div>

							<div className={"flex gap-1 items-center"}>
								<CheckPlusIcon/>
								<p className={"text-sm"}>{bean.glutenFree ? "no gluten" : "yes gluten"}</p>
							</div>

							<div className={"flex gap-1 items-center"}>
								<CheckPlusIcon/>
								<p className={"text-sm"}>{bean.kosher ? "kosher" : "no kosher"}</p>
							</div>
						</div>

						<p className={"font-normal mb-3"}>{bean.description}</p>
						<ul className={"mt-4 list-disc marker:text-primary-600 flex flex-col gap-2"}>
							Ingredients:
							{bean.ingredients.map((item) => {
								return <li className={"ml-5"}>{item}</li>
							})}
						</ul>
					</div>
				</>
				: <>
					<p>loading...</p>
				</>
			}

		</div>
	);
};

export default BeanDetailPage;