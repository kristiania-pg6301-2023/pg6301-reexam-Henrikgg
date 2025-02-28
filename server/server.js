import express from "express"

const app = express();


app.get("/api/innlegg", (req, res ) => {
    res.json([
        {title: "Hello :)"}
    ])
})


const server = app.listen(3000,() => {
    console.log("Listening on http://localhost:" + server.address().port);
});