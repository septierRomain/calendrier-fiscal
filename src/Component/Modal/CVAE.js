import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

const ModalCVAE = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <h4>CVAE</h4>
                </div>
                <div className="modal-body">
                  <p>
                    La CVAE est due par l'entreprise (personne physique ou morale) qui réalise plus de 500 000 € de chiffre d'affaires hors taxe
                  </p>
                  <hr />
                  <a className="modal-link" href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F23546" target='_blank' rel="noreferrer" >Plus d'informations ici !</a>
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

export default ModalCVAE;