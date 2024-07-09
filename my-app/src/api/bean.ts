import {instance} from "./index.ts";
import {IBean, IPaginatedGeneric, IPayload} from "../types.ts";
import {AxiosResponse} from "axios";


export const getBeans = ({pageIndex, pageSize}: IPayload) => {
	return instance.get< IPaginatedGeneric<IBean> >(`beans?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((data: AxiosResponse< IPaginatedGeneric<IBean> >) => data.data)
}

export const getBeanDetail = (id: string) => {
	return instance.get<IBean>(`beans/${id}`).then((data: AxiosResponse<IBean>) => data.data)
}