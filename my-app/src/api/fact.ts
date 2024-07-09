import {instance} from "./index.ts";
import {IFact, IPaginatedGeneric, IPayload} from "../types.ts";
import {AxiosResponse} from "axios";

export const getFacts = ({pageIndex, pageSize}: IPayload) => {
	return instance.get< IPaginatedGeneric<IFact> >(`facts?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((data: AxiosResponse< IPaginatedGeneric<IFact> >) => data.data)
}

export const getFactDetail = (id: string) => {
	return instance.get<IFact>(`facts/${id}`).then((data: AxiosResponse<IFact>) => data.data)
}