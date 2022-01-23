import PropTypes from 'prop-types';

const API = 'https://norma.nomoreparties.space/api';

function checkResponse(res, type) {
  const status = res.ok;
  const contentType = res.headers.get("content-type");
  if(status && contentType.includes(type)) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

  // {
  //   _id: "60666c42cc7b410027a1a9b2",
  //   name: "Флюоресцентная булка R2-D3",
  //   type: "bun",
  //   proteins: 44,
  //   fat: 26,
  //   carbohydrates: 85,
  //   calories: 643,
  //   price: 988,
  //   image: "https://code.s3.yandex.net/react/code/bun-01.png",
  //   image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  //   image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
  //   __v: 0,
  // }

const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});

export { API, checkResponse, dataPropTypes};
