import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

const ModalTV = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <h4>Redevance télé</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Toute entreprise, société ou entrepreneur individuel, qui exerce une activité artisanale, commerciale ou libérale et qui possède un poste de télévision dans un ou plusieurs établissements doit payer cette contribution.
                  </p>
                  <p>
                    La contribution est due que le téléviseur ait été acheté, donné, prêté ou provienne d'une succession.
                  </p>
                  <hr />
                  <a className="modal-link" href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F24670" target='_blank' rel="noreferrer" >Plus d'informations ici !</a>
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

export default ModalTV;