import React from 'react';
import ClockIcon from "../icons/ClockIcon.tsx";
import CartIcon from "../icons/CartIcon.tsx";
import ArrowIcon from "../icons/ArrowIcon.tsx";
import {IRecipe} from "../types.ts";
import {Link} from "react-router-dom";

interface IProps {
	recipe: IRecipe
}

const CardRecipe = ({recipe}: IProps) => {
	return (
		<Link to={`${recipe.recipeId}`} className="flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow">
			<div>
				<img loading={"lazy"} className="rounded-t-lg min-w-[382px] max-h-[390px]" src={recipe.imageUrl} alt=""/>
				<div className="p-5">
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
					</div>

					<p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
						{recipe.description}
					</p>
				</div>
			</div>

			<div className="p-5">
				<Link to={`recipe/${recipe.recipeId}`} className="flex gap-2 items-center justify-end hover:text-red-500 transition-all group">
					<p className={"text-sm font-medium"}>Read more</p>
					<ArrowIcon className={"w-3 h-3 group-hover:text-red-500"}/>
				</Link>
			</div>
		</Link>
	);
};

export default CardRecipe;