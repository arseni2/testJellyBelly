import {instance} from "./index.ts";
import {IPaginatedGeneric, IPayload, IRecipe} from "../types.ts";
import {AxiosResponse} from "axios";


export const getRecipes = ({pageIndex, pageSize}: IPayload) => {
	return instance.get<IPaginatedGeneric<IRecipe>>(`Recipes?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((data: AxiosResponse<IPaginatedGeneric<IRecipe>>) => data.data)
}

export const getRecipeDetail = (id: string) => {
	return instance.get<IRecipe>(`Recipes/${id}`).then((data: AxiosResponse<IRecipe>) => data.data)
}