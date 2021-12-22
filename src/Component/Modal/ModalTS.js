import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLightbulb, faChevronRight } from '@fortawesome/free-solid-svg-icons'
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
                    La taxe sur les salaires est due par les employeurs établis en France qui ne sont pas soumis à la taxe sur la valeur ajoutée (TVA) sur la totalité de leur chiffre d'affaires.
                  </p>
                  <p>La taxe concerne par exemple les employeurs suivants :</p>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Certaines professions libérales</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Établissement bancaire et financier, d'assurance, certains courtier d'assurances et agents de change</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Organisme administratif ou social (association, organisme dans but lucratif,...)</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Société exerçant une activité civile (société d'investissement, société immobilière) sauf la société de construction d'immeubles ou de négoce de biens</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Établissements publics autres que les groupements de communes</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Propriétaires fonciers</ol>
                  <ol><FontAwesomeIcon icon={faChevronRight} />Organismes coopératifs, mutualistes et professionnels agricoles</ol>
                  <hr />
                  <a className="modal-link" href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F22576" target='_blank' rel="noreferrer" >Plus d'informations ici !</a>
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