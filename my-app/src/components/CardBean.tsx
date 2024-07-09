import React from 'react';
import ArrowIcon from "../icons/ArrowIcon.tsx";
import {IBean} from "../types.ts";
import {Link} from "react-router-dom";

interface IProps {
	bean: IBean
}

const CardBean = ({bean}: IProps) => {
	return (
		<Link to={`${bean.beanId}`} className="p-5 flex flex-col justify-between bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 max-w-[19rem]">
			<div>
				<img className="rounded-t-lg" src={bean.imageUrl} alt=""/>
					<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{bean.flavorName}</h5>
					<p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
						{bean.description}
					</p>
			</div>

			<div className=" flex gap-2 items-center justify-end mt-4 hover:text-red-500 transition-all group">
				<p className={"text-sm font-medium"}>Read more</p>
				<ArrowIcon className={"w-3 h-3 group-hover:text-red-500"}/>
			</div>
		</Link>
	);
};

export default CardBean;