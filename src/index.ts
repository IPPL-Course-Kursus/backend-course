import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//app.listen(process.env.PORT, () => {
  //console.log(` Server is running on http://localhost:{process.env.PORT}`);
//});
