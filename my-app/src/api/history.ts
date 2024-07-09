import {instance} from "./index.ts";
import {IMileStone, IPaginatedGeneric, IPayload} from "../types.ts";
import {AxiosResponse} from "axios";

export const getHistories = ({pageIndex, pageSize}: IPayload) => {
	return instance.get< IPaginatedGeneric<IMileStone> >(`MileStones?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((data: AxiosResponse< IPaginatedGeneric<IMileStone> >) => data.data)
}