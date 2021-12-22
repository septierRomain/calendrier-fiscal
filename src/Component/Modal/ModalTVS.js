import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLightbulb, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

const ModalTVS = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <h4>Taxe sur les véhicules des sociétés</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Une société doit payer chaque année la taxe sur les véhicules de sociétés (TVS) qu'elle possède ou utilise en France. 
                  </p>
                  <p>
                  Elle concerne les voitures particulières (destinées au transport de passagers) ou à usage multiple (destinées principalement au transport de personnes). Le montant de la taxe diffère selon le type de véhicules.
                  </p>
                  <p>La TVS concerne les véhicules suivants :</p>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Immatriculés dans la catégorie voitures particulières (avec la mention VP inscrite sur la carte grise)</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />A usage multiple immatriculés dans la catégorie N1, destinés au transport de voyageurs, de leurs bagages ou de leurs biens dans un compartiment unique. Il s'agit en pratique de véhicules (voitures de tourismes taxables à la TVS) dont la carte grise porte la mention camionnette ou CTTE mais qui disposent de plusieurs rangs de places assises.</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Camion pick-up avec 5 places assises minimum</ol>
                  <hr />
                  <a className="modal-link" href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F22203" target='_blank' rel="noreferrer">Plus d'informations ici !</a>
                  </div>
                <div className="modal-close">
                  <button
                      type="button"
                      onClick={hide}
                      className="modal-close-button"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                      OK
                    </button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default ModalTVS;