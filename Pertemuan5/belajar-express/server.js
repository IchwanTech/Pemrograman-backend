import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1> ");
});

app.get("/jsonString", (req, res) => {
  res.send({
    status: 200,
    message: "Succesful",
  });
});

app.get("/json", (req, res) => {
  res.send({
    status: 201,
    message: "Data Succesful created",
    data: {
      id: 1,
      name: "Ichwan Noerfitrah",
      age: 22,
    },
  });
});

app.get("/json/:nama", (req, res) => {
  const dataUrl = req.params;
  res.json({
    data: dataUrl,
  });
});

app.get("/getData/:id", (req, res) => {
  const data = [
    { id: "1", name: "Ichwan Noerfitrah", age: 22 },
    { id: "2", name: "Babachan", age: 112 },
    { id: "3", name: "Slamet Cahyadi", age: 34 },
  ];

  const { id } = req.params;
  const hasil = data.find((item) => item.id === id);

  if (!hasil) {
    res.json({
      status: 404,
      message: "Data not found",
    });
    return;
  }

  res.json({
    status: 200,
    message: "Data found",
    data: hasil,
  });
});

app.get("/json2", (req, res) => {
  const data = [
    {
      id: 1,
      name: "Ichwan Noerfitrah",
      age: 22,
    },
    {
      id: 2,
      name: "Babachan",
      age: 112,
    },
    {
      id: 3,
      name: "Slamet cahyadi",
      age: 34,
    },
  ];
  res.send({
    status: 201,
    message: "Data Succesful created",
    data: data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
