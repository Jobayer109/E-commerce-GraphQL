exports.Category = {
  products: ({ categoryId }, args, { products }) => {
    return products.filter((product) => product.categoryId === categoryId);
  },
};
