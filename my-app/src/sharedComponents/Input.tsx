import React from 'react';

const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
	return <input {...props} className={"w-full rounded-lg outline-0 border border-gray-200 hover:border-primary-500 focus-visible:border-primary-500 p-3 transition duration-400 cursor-pointer"} />
};

export default Input;