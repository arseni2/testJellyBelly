import React, {useEffect} from 'react';
import {getRecipes} from "../api/recipe.ts";
import FirstSection from "../sections/FirstSection.tsx";
import HistorySection from "../sections/HistorySection.tsx";
import BeanSection from "../sections/BeanSection.tsx";
import FactSection from "../sections/FactSection.tsx";
import RecipeSection from "../sections/RecipeSection.tsx";
import CombinationSection from "../sections/CombinationSection.tsx";
import ContactSection from "../sections/ContactSection.tsx";

const Main = () => {
	useEffect(() => {
		getRecipes({pageSize: 2, pageIndex: 1}).then((data: any) => {
			console.log(data)
		})
	}, [])
	return (
		<>
			<FirstSection/>

			<HistorySection/>

			<BeanSection/>

			<FactSection/>

			<RecipeSection/>

			<CombinationSection/>

			<ContactSection/>
		</>
	);
};

export default Main;