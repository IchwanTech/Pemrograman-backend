import model from "./model.js";

const show = (req, res) => {
  res.json({
    status: 200,
    data: model,
  });
};

export default show;
