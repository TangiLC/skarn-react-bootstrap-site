import React from "react";
import GoogleMapReact from "google-map-react";

const defaultProps = {
	center: {
		lat: 43.679795,
		lng: 7.0212669,
	},
	zoom: 11,
};

function MapComponent() {
	return (
		<div className="col" style={{ height: "45dvh", maxHeight: "500px", width: "95%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			/>
		</div>
	);
}
export default MapComponent;
