var pluralize = require("pluralize");

// PluralizeString Function
function PluralizeString(pony, quantity, product) {
  return ("\n" + pony + " " + quantity + " " + ((quantity === 1 ? pluralize.singular : pluralize.plural) (product.product_name)) + "!");

};
module.exports = PluralizeString;
