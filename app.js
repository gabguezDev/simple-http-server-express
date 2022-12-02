const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

/* app.get("/", (req, res) => {
	res.sendFile(__dirname + "public/index.html");
}); */
app.get("/generic", (req, res) => {
	res.sendFile(__dirname + "/public/generic.html");
});
app.get("/elements", (req, res) => {
	res.sendFile(__dirname + "/public/elements.html");
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
