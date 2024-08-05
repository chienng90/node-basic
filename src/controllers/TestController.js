const test = (req, res) => {
  const { fullname, email } = req.body;
  res.send({
    fullname,
    email,
  });
};

export default test;
