const firstMiddleware = (req, res, next) => {
  console.log("inside method first middleware");
  next();
};

console.log("First Middleware");

export default firstMiddleware;
