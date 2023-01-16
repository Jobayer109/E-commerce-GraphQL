exports.Query = {
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;

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
  product: (parent, { productId }, { db }) => {
    return (product = db.products.find((product) => product.id === productId));
  },
  //
  categories: (parent, args, { db }) => {
    return db.categories;
  },

  //
  category: (parent, { id }, { db }) => {
    return (category = db.categories.find((category) => category.id === id));
  },
};
