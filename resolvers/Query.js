const { products, categories } = require("../db");

exports.Query = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
  },

  //
  product: (parent, { productId }, { products }) => {
    return (product = products.find((product) => product.id === productId));
  },

  //
  categories: (parent, args, { categories }) => {
    return categories;
  },

  //
  category: (parent, { id }, { categories }) => {
    return (category = categories.find((category) => category.id === id));
  },
};
