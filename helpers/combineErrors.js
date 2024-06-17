const combineErrors = (errors) => {
  return errors.inner.reduce((acc, curr) => {
    if (!acc[curr.path]) {
      acc[curr.path] = [];
    }

    acc[curr.path].push(curr.message);
    return acc;
  }, {});
};

module.exports = combineErrors;
