exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    // const categoryId = parent.categoryId;
    return db.categories.find((category) => category.id === categoryId);
  },
  review: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};
