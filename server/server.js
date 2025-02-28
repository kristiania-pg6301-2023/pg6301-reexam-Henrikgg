import express from "express"
import path from "path";

const app = express();


const innlegg = [
    {
        title: "Hun sa dette omg!..",
        plot: "Det hele starten med.....",
        year: 2025
    },
    {
        title: "Han sa dette omg!..",
        plot: "Det hele started med....",
        year: 2024
    }
];


app.use(express.static(path.resolve("../dist")));



app.get("/api/innlegg", (req, res ) => {
    res.json(innlegg);

});


const server = app.listen(3000,() => {
    console.log("Listening on http://localhost:" + server.address().port);
});