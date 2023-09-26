import React from "react";
import "./styles.css";
import SkarnCarousel from "./Carousel";
import { content } from "./content.js";

const decalArray = (array, nb) => {
	const start = array.slice(nb);
	const end = array.slice(0, nb);
	return [...start, ...end];
};

const Confiance = () => {
	const content1 = decalArray(content, 1);
	const content2 = decalArray(content, 2);
	return (
		<div className="bg-light row confiance-container">
			<div className="title-section my-3">ILS NOUS FONT CONFIANCE</div>
			<div className="row width-80 justify-content-center grad-bg">
				<div className="col"></div>
				<SkarnCarousel content={content} />
				<SkarnCarousel content={content1} />
				<SkarnCarousel content={content2} />
				<div className="col"></div>
			</div>
		</div>
	);
};

export default Confiance;