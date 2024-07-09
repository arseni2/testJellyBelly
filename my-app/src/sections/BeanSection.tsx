import React, { useEffect, useState } from 'react';
import CardBean from "../components/CardBean.tsx";
import { getBeans } from "../api/bean.ts";
import { IBean, IPaginatedGeneric } from "../types.ts";

const BeanSection = () => {
	const [beans, setBeans] = useState<IPaginatedGeneric<IBean> | null>(null);

	useEffect(() => {
		getBeans({ pageSize: 9, pageIndex: 1 }).then(data => {
			setBeans(data);
		});
	}, []);

	return (
		<section className="bg-white mt-[120px] flex flex-col gap-6" id="bean_section">
			<h2 className={"mb-4 text-4xl font-extrabold text-gray-900"}>
				Discover Our <span className={"text-primary-500"}>Beans</span>
			</h2>
			<div className={"flex gap-4 flex-wrap"}>
				{beans?.items && beans.items.map((bean, i) => (
					<CardBean key={i} bean={bean} />
				))}
			</div>
		</section>
	);
};

export default BeanSection;
