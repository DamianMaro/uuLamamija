/* eslint-disable */

const foodCreateDtoInType = shape({
  name: string(50).required,
  desc: string(1000).required,
  price: float().required,
  img: string(50).required
});
