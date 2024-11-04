import "dotenv/config";
import "./config/db.js";
import e from "express";

const app = e();

app.get("/", (req, res) => {
    res.send("servidor rodando")
})

app.use(e.json());

app.listen(process.env.API_PORT, () => console.log("Server running"));