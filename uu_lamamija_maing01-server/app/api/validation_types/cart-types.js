/* eslint-disable */
const cartUpdateDtoInType = shape({
  id: { type: "string", required: true },
  nazov: { type: "string", minLength: 1, maxLength: 50, required: true },
  cena: { type: "float", required: true },
  pocet: { type: "int", required: true },
});
