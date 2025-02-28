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

app.get("/api/innlegg", (req, res ) => {
    res.json(innlegg);

});







app.use(express.static(path.resolve("..","client", "dist")));
app.use((req, res) => {
    res.sendFile(path.resolve("..","client", "dist", "index.html"));
})







const server = app.listen(3000,() => {
    console.log("Listening on http://localhost:" + server.address().port);
});