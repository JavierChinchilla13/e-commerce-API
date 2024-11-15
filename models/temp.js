[
  {
    $match: {
      product: new ObjectId("6733e4e92121d72b0eab6912"),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: "$rating",
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];
