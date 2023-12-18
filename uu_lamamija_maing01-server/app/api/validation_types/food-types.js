/* eslint-disable */

const foodCreateDtoInType = shape({
  name: string(50).isRequired(),
  desc: string(1000).isRequired(),
  price: float().isRequired(),
  img: string(50).isRequired()
});
