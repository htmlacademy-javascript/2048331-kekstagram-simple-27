import { getData, sendData } from './api.js';
import { setUserFormSubmit, closeUserModal } from './form.js';
import { renderPictures } from './small-pic.js';

import { showSuccess } from './success-modal.js';
import { showError } from './error-modal.js';

import { showAlert } from './util.js';

const onGetDataSuccess = (data) => {
  renderPictures(data);
};

const onGetDataFail = () => {
  showAlert('Ошибка при загрузке данных с сервера');
};

const onFormSubmitSuccess = () => {
  showSuccess();
  closeUserModal();
};

const onFormSubmitFail = () => {
  showError();
};

const onFormSubmit = (formData) => {
  sendData(formData, onFormSubmitSuccess, onFormSubmitFail);
};

setUserFormSubmit(onFormSubmit);
getData(onGetDataSuccess, onGetDataFail);
