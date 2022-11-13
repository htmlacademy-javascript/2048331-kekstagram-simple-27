const isEscapeKey = (evt) => evt.key === 'Escape';
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.cssText = `
  zIndex: 100;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 10px 3px;
  fontSize: 30px;
  textAlign: center;
  backgroundColor: red;
  `;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    //alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, showAlert };
