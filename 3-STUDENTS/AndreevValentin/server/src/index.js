const express = require("express");
const fs = require("fs");

const server = express();
server.use(express.json());

server.get("/catalog", async (req, res) => {
	fs.readFile("./src/db/catalog.json", (err, data) => {
		if(err) {
			throw err;
		}
		res.header("Content-Type", "application/json").send(data);
	});
});

server.get("/cart", async (req, res) => {
	fs.readFile("./src/db/cart.json", (err, data) => {
		if(err) {
			throw err;
		}
		res.header("Content-Type", "application/json").send(data);
	});
});

server.put("/cart/:id", (req, res) => {
	console.log("put", req.params.id, req.body);
	res.send("");
});

server.delete("/cart/:id", (req, res) => {
	console.log("delete", req.params.id);
	res.send("");
})

server.listen(3300, () => {
	console.log("Listening");
});
