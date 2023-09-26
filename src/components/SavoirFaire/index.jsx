import React from "react";
import "./styles.css";
import { content } from "./content.js";

const SavoirFaire = () => {
	return (
		<div className="bg-light row savoirFaire-container">
			<div className="title-section my-3">NOTRE SAVOIR-FAIRE</div>
			<div className="row width-80">
				<div className="col">{content}</div>
			</div>
		</div>
	);
};

export default SavoirFaire;
