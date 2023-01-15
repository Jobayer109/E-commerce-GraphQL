exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    // const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
  review: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
