import React from 'react';

const ButtonSecondary: React.FC<any> = (props) => {
	return (
		<div className={"select-none cursor-pointer inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all"}>
			{props.children}
		</div>
	);
};

export default ButtonSecondary;