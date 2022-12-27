const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// hbs.registerHelper("helper_name", function (options) {
// 	return "helper value";
// });
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", { titulo: "Curso de Node", nombre: "Gabriel D." });
});

app.get("/generic", (req, res) => {
	res.render(
		"generic" /* , { titulo: "Curso de Node", nombre: "Gabriel D." } */
	);
	// res.sendFile(__dirname + "/public/generic.html");
});
app.get("/elements", (req, res) => {
	res.render(
		"elements" /* , { titulo: "Curso de Node", nombre: "Gabriel D." } */
	);
	// res.sendFile(__dirname + "/public/elements.html");
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
