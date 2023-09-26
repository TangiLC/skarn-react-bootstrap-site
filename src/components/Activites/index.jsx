import React from "react";
import "./styles.css";
import { content } from "./content.js";

const Activites = () => {
	return (
		<div className="bg-dark row activites-container">
            <div className="title-section my-3">NOTRE DOMAINE D'ACTIVITÉ</div>
            <div className="row">
			{content.map((item, index) => (
				<div key={index} className="col-12 col-md activite-item">
					<img src={item.image} alt={item.title} className="activite-img" />
					<h2 className="my-3">{item.title}</h2>
					<p>{item.content}</p>
				</div>
			))}</div>
		</div>
	);
};

export default Activites;
