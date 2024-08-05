const thirdMiddleware = (req, res, next) => {
  console.log("inside method third middleware");
  next();
};

console.log("Third Middleware");

export default thirdMiddleware;
