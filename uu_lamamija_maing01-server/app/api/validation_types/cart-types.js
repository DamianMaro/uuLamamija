/* eslint-disable */
const cartUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(50).isRequired(),
  price: float(10).isRequired(),
  count: integer(10).isRequired()
});
