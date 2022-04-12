import PropTypes from "prop-types";

const API = "https://norma.nomoreparties.space/api";

function checkResponse(res, type) {
  const status = res.ok;
  const contentType = res.headers.get("content-type");
  if (status && contentType.includes(type)) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

async function resetPasswordRequest(form) {
  const res = await fetch(`${API}/password-reset/reset`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res, "application/json");
  return data;
}

async function updatePasswordRequest(form) {
  const res = await fetch(`${API}/password-reset`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res, "application/json");
  return data;
}

async function registerRequest(form) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res, "application/json");
  return data;
}

async function loginRequest(form) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await checkResponse(res, "application/json");
  return data;
}

const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
});

export {
  registerRequest,
  loginRequest,
  resetPasswordRequest,
  updatePasswordRequest,
  API,
  checkResponse,
  dataPropTypes,
};
