import { useState } from "react";
import React from "react";

function WithTranslation(WrappedComponent, translation) {
	return function (props) {
		const [language, setLanguage] = useState("english");

		const translate = (key) => translation[language][key] || key;

		const changeLanguage = (lang) => {
			setLanguage(lang);
		};

		return (
			<WrappedComponent
				{...props}
				translate={translate}
				language={language}
				changeLanguage={changeLanguage}
			/>
		);
	};
}

export default WithTranslation;
