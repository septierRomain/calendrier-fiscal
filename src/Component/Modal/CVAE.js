import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

const ModalCVAE = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>CVAE</h4>
                </div>
                <div className="modal-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi eligendi asperiores beatae sequi ad, libero architecto, alias perspiciatis dolorum hic fugit blanditiis quas sunt repudiandae debitis maiores ex! Odit?</div>
                <div className="modal-close">
                  <button
                      type="button"
                      onClick={hide}
                      className="modal-close-button"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Ok
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