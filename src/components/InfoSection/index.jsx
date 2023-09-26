import React from "react";
import "./styles.css";


const InfoSection = (props) => {
	return (
		<div className="row infoSection-container">
			<div className="title-section my-3">{props.title}</div>
			<div className="row width-80">
				<div className="col" dangerouslySetInnerHTML={{__html: props.content}}/>
			</div>
		</div>
	);
};

export default InfoSection;
