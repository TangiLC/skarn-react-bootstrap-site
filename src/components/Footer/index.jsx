import React, { useState } from "react";
import Modal from "react-modal";
import { BsInstagram, BsFacebook, BsGeoAltFill } from "react-icons/bs";
import { Conf } from "../Confidential";

import "./styles.css";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

function Footer() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		console.log("open");
		setModalIsOpen(true);
	};
	const closeModal = () => {
		setModalIsOpen(false);
	};
	return (
		<>
			<div className="container-flex bg-dark row text-center footer-container text-center">
				<div className="col-12 col-md-8">
					<div className="row">
						<div className="col-4 pt-4 pb-4 text-white footer-item">©&nbsp;SKARN 2023</div>

						<div className="col-4 pt-4 pb-4">
							<a className="text-white text-decoration-none footer-item" href="/contact">
								CONTACT
							</a>
						</div>

						<div className="col-4 pt-4 pb-4 text-white btn" type="button" onClick={openModal}>
							POLITIQUE DE CONFIDENTIALITÉ
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4">
					<div className="row">
						<div className="col-2"></div>
						<div className="col-3 pt-4 pb-4 social-logo">
							<a target="_blank" href="https://www.instagram.com/" alt="instagram" rel="noreferrer">
								<BsInstagram />
							</a>
						</div>
						<div className="col-3 pt-4 pb-4 social-logo">
							<a target="_blank" href="https://www.facebook.com/" alt="facebook" rel="noreferrer">
								<BsFacebook />
							</a>
						</div>
						<div className="col-3 pt-4 pb-4 social-logo">
							<a target="_blank" href="https://bit.ly/3Fam8Bf" alt="localisation" rel="noreferrer">
								<BsGeoAltFill />
							</a>
						</div>
						<div className="col-1"></div>
					</div>
				</div>
			</div>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Modal">
				<div>{Conf.title}</div>
				<div>{Conf.content}</div>
				<button onClick={closeModal}>Fermer</button>
			</Modal>
		</>
	);
}
export default Footer;
