/* eslint-disable react/prop-types */

import "./Modal.css";

function Modal({ data, onClose, isDataChanged, onChangeData }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {!isDataChanged ? <h2>{data.name}</h2> : <h2>{data.submitText}</h2>}
        <p>{data.description}</p>

        <div className="image">
          {!isDataChanged ? (
            <img className="imag" src={data.url} alt="imagedata" />
          ) : (
            <img className="imag" src={data.changeurl} alt="imagedata" />
          )}
        </div>
        <button className="btn" onClick={onChangeData}>
          Change Data
        </button>
      </div>
    </div>
  );
}

export default Modal;
