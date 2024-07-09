import React from 'react';
import ContactForm from "../forms/ContactForm.tsx";

const ContactSection = () => {
	return (
		<section className="bg-white mt-[120px] flex flex-col gap-6">
			<h2 className={"mb-4 text-4xl  font-extrabold text-gray-900"}>
				Contact us
			</h2>

			<ContactForm/>
		</section>
	);
};

export default ContactSection;