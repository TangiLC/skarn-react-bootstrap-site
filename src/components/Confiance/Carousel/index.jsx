import Carousel from "react-bootstrap/Carousel";

function SkarnCarousel(props) {
	return (
		<Carousel
			slide={true}
			fade={true}
			controls={false}
			indicators={false}
			indicatorLabels={false}
			wrap
			className="col"
		>
			{props.content.map((item, index) => (
				<Carousel.Item key={index}>
					<a href={item.url}>
						<img src={item.image} alt={item.alt} className="carousel-img" />
					</a>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default SkarnCarousel;
