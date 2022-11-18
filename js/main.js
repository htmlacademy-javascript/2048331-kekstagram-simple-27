import { getData, sendData } from './api.js';
import {
  setUserFormSubmit,
  closeUserModal,
  blockSubmitButton,
  unblockSubmitButton,
} from './modal-form.js';
import { renderPictures } from './small-pic.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { showAlert } from './util.js';

const RequestMessage = {
  GET_DATA_FAIL: 'Ошибка при загрузке данных с сервера',
};

const onGetDataSuccess = (data) => {
  renderPictures(data);
};

const onGetDataFail = () => {
  showAlert(RequestMessage.GET_DATA_FAIL);
};

const onFormSubmitSuccess = () => {
  showSuccessMessage();
  unblockSubmitButton();
  closeUserModal();
};

const onFormSubmitFail = () => {
  showErrorMessage();
  unblockSubmitButton();
};

const onFormSubmit = (formData) => {
  blockSubmitButton();
  sendData(formData, onFormSubmitSuccess, onFormSubmitFail);
};

setUserFormSubmit(onFormSubmit);
getData(onGetDataSuccess, onGetDataFail);
