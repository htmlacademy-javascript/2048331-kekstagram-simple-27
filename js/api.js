const RequestUrl = {
  GET: 'https://27.javascript.pages.academy/kekstagram-simple/data',
  POST: 'https://27.javascript.pages.academy/kekstagram-simple',
};

const getData = (onSuccess, onFail) => {
  fetch(RequestUrl.GET)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(onFail);
};

const sendData = (body, onSuccess, onFail) => {
  fetch(RequestUrl.POST, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }

      onFail();
    })
    .catch(onFail);
};

export { getData, sendData };
