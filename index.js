import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/";


app.use(express.static("public"));



app.get("/", async (req, res) => {
    res.render("index.ejs", { content: "Wanna hear Joke's" })
});


app.get("/programmingjoke", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "Programming?type=single&safe=true");
        res.render("index.ejs", { content: response.data.joke });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/miscjoke", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "Misc?type=single&safe=true");
        res.render("index.ejs", { content: response.data.joke });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});



app.get("/singlejoke", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "Any?type=single&safe=true");
        res.render("index.ejs", { content: response.data.joke });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/twopartjoke", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "Any?type=twopart&safe=true");

        const combinedContent = `${response.data.setup} ${response.data.delivery}`;

        res.render("index.ejs", { content: combinedContent});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/punjoke", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "pun?type=single&safe=true");
        res.render("index.ejs", { content: response.data.joke });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});










app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
