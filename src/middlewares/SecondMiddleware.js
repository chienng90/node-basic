const secondMiddleware = (req, res, next) => {
  console.log("inside method Second middleware");
  next();
};

console.log("Second Middleware");

export default secondMiddleware;
