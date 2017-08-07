import React from 'react';

/* ---- COMPONENTS ---- */
import CreatePond from './modal.create.pond';
import SelectPond from './modal.select.pond';

/* ---- STYLE ---- */
require('./modal.scss');

const ModalContainer = ({ modalType, onCloseModal, onSelectModal, onResetModal }) => (
  <div className="modal-overlay flex-column-center-center">
    <div className="modal-body flex-column-center-center">
      {
        modalType === 'create-pond'
        ? <CreatePond
          onCloseModal={onCloseModal}
          onResetModal={onResetModal}
        />
        : modalType === 'select-pond'
        ? <SelectPond
          onCloseModal={onCloseModal}
          onSelectModal={onSelectModal}
          onResetModal={onResetModal}
        />
        : <div />
      }
    </div>
  </div>
);

export default ModalContainer;
