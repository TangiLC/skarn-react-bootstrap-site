import "./styles.css";
import ContactButton from "../../components/ContactButton";
import Activites from "../../components/Activites";
import InfoSection from "../../components/InfoSection";
import Confiance from "../../components/Confiance";

import { content } from "../../const/savoirFaire.js";
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
						<ContactButton/>
					</div>
					<div className="col-12 col-md-4 mx-auto">
						<img className="logo-homepage" src={Logo512} alt="studio Skarn" />
					</div>
				</div>
			</div>

			<Activites />
			<InfoSection title="NOTRE SAVOIR-FAIRE" content={content} />
			<Confiance />
			<br/>
		</>
	);
}
export default HomePage;
