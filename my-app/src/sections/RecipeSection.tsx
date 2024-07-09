import React, {useEffect, useState} from 'react';
import CardRecipe from "../components/CardRecipe.tsx";
import {getRecipes} from "../api/recipe.ts";
import {IPaginatedGeneric, IRecipe} from "../types.ts";

const RecipeSection = () => {
	const [recipes, setRecipes] = useState<IPaginatedGeneric<IRecipe> | null>(null)

	useEffect(() => {
		getRecipes({pageSize: 6, pageIndex: 1}).then(data => {
			setRecipes(data)
		})
	}, [])
	return (
		<section className="bg-white mt-[120px] flex flex-col gap-6">
			<h2 className={"mb-4 text-4xl  font-extrabold text-gray-900"}>
				<span className={"text-primary-500"}>Recipes</span> with Beans
			</h2>

			<div className={"flex gap-4 flex-wrap"}>
				{recipes?.items && recipes.items.map((recipe, i) => {
					return <CardRecipe key={i} recipe={recipe} />
				})}
			</div>
		</section>
	);
};

export default RecipeSection;