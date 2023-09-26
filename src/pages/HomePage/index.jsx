import "./styles.css";
import Activites from "../../components/Activites";
import SavoirFaire from "../../components/SavoirFaire";
import Confiance from "../../components/Confiance";
import Logo512 from "../../assets/skarn_logo512.png";

function HomePage() {
	return (
		<>
			<div className="container-fluid width-80">
				<div className="row flex-column-reverse flex-md-row">
					<div className="col-12 col-md-8 homepage-title ">
						<div>
							<h1>SKARN</h1>
						</div>
						<div>
							<h2>Développement Informatique - site web et mobile</h2>
						</div>
						<div>
							<a href="mailto:skarn@skarn.fr" alt="contact mail" className="btn btn-dark contact_button">
								CONTACTEZ-NOUS
							</a>
						</div>
					</div>
					<div className="col-12 col-md-4 mx-auto">
						<img className="logo-homepage" src={Logo512} alt="studio Skarn" />
					</div>
				</div>
			</div>

			<Activites />
			<SavoirFaire />
			<Confiance />
		</>
	);
}
export default HomePage;
