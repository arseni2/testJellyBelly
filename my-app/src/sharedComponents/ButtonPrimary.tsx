import React from 'react';

const ButtonPrimary: React.FC< React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> > = (props) => {
	const {className, ...otherProps} = props
	return (
		<div className={`select-none px-4 py-2 text-base font-medium text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 cursor-pointer transition-all ${className}`}>
			{props.children}
		</div>
	);
};

export default ButtonPrimary;