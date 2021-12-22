import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

const ModalOSS = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <h4>Guichet unique TVA</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Depuis 1er juillet 2021, de nouvelles règles de localisation des ventes à distance de biens, en provenance d’un autre État membre de l’Union européenne (UE) ou en provenance de pays tiers, et à destination de non assujettis à la TVA entrent en vigueur. La majorité des opérations sont imposables dans l’État membre de consommation.
                  </p>
                  <p>L'OSS à été crée pour les ventes à distance de bien en UE depuis un stock situé en UE et l'IOSS pour le dropshipping.</p>
                  <p>Nous avons crée un simulateur pour savoir si vous etes concerné, c'est <a className="modal-link" href="https://dougs-ecommerce.netlify.app/" target='_blank' rel="noreferrer">ICI</a></p>
                  <hr />
                  <a className="modal-link" href="https://www.impots.gouv.fr/portail/professionnel/jutilise-le-guichet-unique-tva-ioss-oss" target='_blank' rel="noreferrer">Plus d'information ici !</a>
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

export default ModalOSS;