import {instance} from "./index.ts";
import {IPaginatedGeneric, ICombination, IPayload} from "../types.ts";
import {AxiosResponse} from "axios";

export const getCombinations = ({pageIndex, pageSize}: IPayload) => {
	return instance.get< IPaginatedGeneric<ICombination> >(`combinations?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((data: AxiosResponse< IPaginatedGeneric<ICombination> >) => data.data)
}

export const getCombinationDetail = (id: string) => {
	return instance.get< ICombination >(`combinations/${id}`).then((data: AxiosResponse< ICombination >) => data.data)
}