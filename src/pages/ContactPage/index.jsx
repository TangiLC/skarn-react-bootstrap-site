import ContactButton from "../../components/ContactButton";
import MapComponent from "../../components/MapComponent";
import InfoSection from "../../components/InfoSection";

import {content} from "../../const/contact";

function ContactPage() {
	return (
		<>
			<div className="row grad-bg py-5 w-100 ">
				<ContactButton />
			</div>
			<div className="row">
				<div className="col-12 col-md-6 my-auto">
					<div className="row mx-auto">
						<div className="d-none d-md-inline col-sm-2 col-md-6">&nbsp;</div>
						<div className="col-12 col-sm-10 col-md-6 margeG text-center text-md-start mx-auto">
							<h1>NOS&nbsp;COORDONNÉES</h1>
							<h2>SKARN</h2>
							5 ch de Frayère
							<br />
							06650 LE ROURET
							<br />
							+336&nbsp;06&nbsp;06&nbsp;06&nbsp;06
							<br />
							<a href="mailto:quentin.wenzinger@skarn.fr" alt="contact mail" className="mailto">
								quentin.wenzinger@skarn.fr
							</a>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 p-0">
					<div className="row mx-auto">
						<MapComponent />
					</div>
				</div>
				<div className="row mx-auto text-center mb-5">
					<InfoSection title="CONTACTEZ-NOUS" content={content} />
				</div>
			</div>
		</>
	);
}
export default ContactPage;
