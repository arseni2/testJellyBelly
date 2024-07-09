import React from 'react';
import Input from "../sharedComponents/Input.tsx";
import Textarea from "../sharedComponents/Textarea.tsx";
import ButtonPrimary from "../sharedComponents/ButtonPrimary.tsx";
import greenBlackBean from "../assets/img/JellyBellyPreviewProduct.png"

const ContactForm = () => {
	return (
		<div className={"flex gap-10 items-start"} id="contact_form">
			<div className={"flex flex-col gap-10 max-w-[60%]"}>
				<img className={"min-w-[400px]"} src={greenBlackBean} alt={"img bean"}/>
			</div>
			<div className={"flex flex-col gap-3 bg-gray-50 p-6 rounded-lg w-full"}>
				<div className={"flex gap-2"}>
					<div className={"flex flex-col gap-1 w-full"}>
						<label className={"text-sm"} htmlFor="name">Name:</label>
						<Input id="name" placeholder={"Name"}/>
					</div>
					<div className={"flex flex-col gap-1 w-full"}>
						<label className={"text-sm"} htmlFor="email">Email:</label>
						<Input id="email" placeholder={"Email"} type={"email"}/>
					</div>
				</div>
				<div className={"flex flex-col gap-1"}>
					<label className={"text-sm"} htmlFor="message">Message:</label>
					<Textarea id="message" placeholder={"Message"} />
				</div>
				<ButtonPrimary>Submit</ButtonPrimary>
			</div>
		</div>
	);
};

export default ContactForm;
