import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

const ModalTS = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <h4>Taxe sur les salaires</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi eligendi asperiores beatae sequi ad, libero architecto, alias perspiciatis dolorum hic fugit blanditiis quas sunt repudiandae debitis maiores ex! Odit?
                  </p>
                  <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F22576" target='_blank' rel="noreferrer" >Plus d'informations ici !</a>
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

export default ModalTS;