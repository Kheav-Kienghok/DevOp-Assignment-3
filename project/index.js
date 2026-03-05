import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

// GET API
app.get("/", (req, res) => {
    res.json({
        message: "API is running!"
    })
})

app.get("/food", (req, res) => {
    res.json({
        message: "Welcome to FoodExpress API",
        items: ["Burger", "Pizza", "Sushi"]
    });
});

app.get("/status", (req, res) => {
    res.json({
        status: "FoodExpress API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
