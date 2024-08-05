const controller = (req, res, next) => {
  console.log("inside controller");
  res.send("hello world");
};

console.log("Controller");

export default controller;
