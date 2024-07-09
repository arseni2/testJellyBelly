import React, {useEffect, useState} from 'react';
import {getRecipeDetail} from "../api/recipe.ts";
import {useParams} from "react-router-dom";
import {IRecipe} from "../types.ts";
import ClockIcon from "../icons/ClockIcon.tsx";
import CartIcon from "../icons/CartIcon.tsx";
import CookTimeIcon from "../icons/CookTimeIcon.tsx";

const RecipeDetailPage = () => {
	const [recipe, setRecipe] = useState<IRecipe | null>(null)
	const { id } = useParams()

	useEffect(() => {
		getRecipeDetail(id).then(data => setRecipe(data))
	}, [])
	return (
		<div className={"grid grid-cols-2 gap-4 mt-[70px]"}>
			{recipe
				? <>
					<img className={"rounded-xl"} src={recipe.imageUrl} alt=""/>
					<div className={"flex flex-col gap-2"}>
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.name}</h5>

						<div className={"flex gap-6"}>
							<div className={"flex gap-2 items-center"}>
								<ClockIcon/>
								<p className={"text-sm"}>{recipe.totalTime || "-"}</p>
							</div>

							<div className={"flex gap-2 items-center"}>
								<CartIcon/>
								<p className={"text-sm"}>{recipe.ingredients.length}</p>
							</div>

							<div className={"flex gap-2 items-center"}>
								<CookTimeIcon/>
								<p className={"text-sm"}>{recipe.cookTime}</p>
							</div>
						</div>

						<p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
							{recipe.description}
						</p>

						<ul className={"mt-4 list-disc marker:text-primary-600 flex flex-col gap-2"}>
							Ingredients:
							{recipe.ingredients.map((item) => {
								return <li className={"ml-5"}>{item}</li>
							})}
						</ul>
					</div>
				</>
				: <p>loading...</p>
			}
		</div>
	);
};

export default RecipeDetailPage;