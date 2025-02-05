const validasi = (req, res, next) => {
  const { nama, email, password } = req.body;
  if (!nama || typeof nama !== "string") {
    res.status(400).json({
      message: "Nama harus diisi atau berupa string",
    });
  } else if (!email || typeof email !== "string") {
    res.status(400).json({
      message: "Email harus diisi, atau berupa string",
    });
  } else if (!password || typeof password !== "string") {
    res.status(400).json({
      message: "Password harus diisi, atau berupa string",
    });
  }
  next();
};

export default validasi;
