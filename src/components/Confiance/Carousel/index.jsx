import Carousel from "react-bootstrap/Carousel";

function SkarnCarousel(props) {
	return (
		<Carousel
			slide={false}
			fade={true}
			controls={false}
			indicators={false}
			indicatorLabels={false}
			wrap
            interval={900}
            pause={false}
			className="col-12 col-md-3"
		>
			{props.content.map((item, index) => (
				<Carousel.Item key={`${props.key}${index}`}>
					<a href={item.url}>
						<img src={item.image} alt={item.alt} className="carousel-img" title={item.alt}/>
					</a>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default SkarnCarousel;
