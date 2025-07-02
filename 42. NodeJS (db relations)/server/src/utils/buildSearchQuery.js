const buildSearchQuery = (search) => {
  if (!search) return {};

  return {
    $or: [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ],
  };
};

module.exports = buildSearchQuery;
