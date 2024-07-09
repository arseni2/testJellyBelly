import Main from "./pages/Main.tsx";
import React from "react";
import MainLayout from "./layouts/MainLayout.tsx";
import {Route, Routes} from "react-router-dom";
import BeanPage from "./pages/BeanPage.tsx";
import FactPage from "./pages/FactPage.tsx";
import RecipePage from "./pages/RecipePage.tsx";
import CombinationPage from "./pages/CombinationPage.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";
import BeanDetailPage from "./pages/BeanDetailPage.tsx";
import FactDetailPage from "./pages/FactDetailPage.tsx";
import CombinationDetailPage from "./pages/CombinationDetailPage.tsx";
import RecipeDetailPage from "./pages/RecipeDetailPage.tsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout/>}>
				<Route index element={<Main/>}/>
				<Route path="/bean" element={<BeanPage />} />
				<Route path="/bean/:id" element={<BeanDetailPage />} />

				<Route path="/fact" element={<FactPage />}/>
				<Route path="/fact/:id" element={<FactDetailPage />}/>

				<Route path="/recipe" element={<RecipePage />}/>
				<Route path="/recipe/:id" element={<RecipeDetailPage />}/>

				<Route path="/combination" element={<CombinationPage />}/>
				<Route path="/combination/:id" element={<CombinationDetailPage />}/>

				<Route path="/history" element={<HistoryPage />}/>
			</Route>
		</Routes>
	)
}

export default App
