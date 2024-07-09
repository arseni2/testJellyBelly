import React from 'react';

type propsType = {
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	limit?: number
}
const Textarea: React.FC<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & propsType> = (props) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = 'inherit';
		e.target.style.height = `${e.target.scrollHeight}px`;
		e.target.style.height = `${Math.min(e.target.scrollHeight, props.limit ? props.limit : 250)}px`;
		props.onChange && props.onChange(e)
	}

	return <textarea {...props} onChange={handleChange} className={"w-full rounded-lg outline-0 border border-gray-200 hover:border-primary-500 focus-visible:border-primary-500 p-3 transition duration-400 cursor-pointer"}></textarea>;
};

export default Textarea;