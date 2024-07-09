import React, {useCallback, useEffect, useState} from 'react';
import {IRecipe} from "../types.ts";
import useInfiniteScroll from "../hooks/useInfiniteScroll.ts";
import CardCombination from "../components/CardCombination.tsx";
import {getRecipes} from "../api/recipe.ts";
import CardRecipe from "../components/CardRecipe.tsx";

const RecipePage = () => {
	const [recipes, setRecipes] = useState<IRecipe[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const fetchRecipes = useCallback(() => {
		getRecipes({pageIndex: currentPage, pageSize: 9})
			.then(data => {
				setRecipes(prevRecipes => [...prevRecipes, ...data.items]);
				setCurrentPage(prevPage => prevPage + 1);
				setTotalCount(data.totalCount);
			})
			.finally(() => {
				setIsLoading(false);
				setIsFetching(false); // Ensure this is properly called in your hook
			});
	}, [currentPage]);

	const [isFetching, setIsFetching] = useInfiniteScroll(fetchRecipes, totalCount, recipes.length);

	useEffect(() => {
		fetchRecipes();
	}, []);

	useEffect(() => {
		if (isFetching) {
			setIsLoading(true);
		}
	}, [isFetching]);

	return (
		<div className={"flex gap-4 flex-wrap mt-[70px]"}>
			{recipes.map((recipe, i) => (
				<CardRecipe key={i} recipe={recipe}/>
			))}
			{(isLoading || isFetching) && <p>loading...</p>}
		</div>
	);
};

export default RecipePage;