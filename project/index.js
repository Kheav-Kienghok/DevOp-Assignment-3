import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

// In-memory food items
let foodItems = ["Burger", "Pizza", "Sushi"];

// GET API
app.get("/", (req, res) => {
    res.json({
        message: "API is running!"
    });
});

app.get("/food", (req, res) => {
    res.json({
        message: "Welcome to FoodExpress API",
        items: foodItems
    });
});

app.get("/status", (req, res) => {
    res.json({
        status: "FoodExpress API is running"
    });
});

// POST API - Add a new food item
app.post("/food", (req, res) => {
    const { item } = req.body;

    if (!item || typeof item !== "string") {
        return res.status(400).json({ error: "Invalid food item" });
    }

    foodItems.push(item);
    res.status(201).json({
        message: "Food item added successfully",
        items: foodItems
    });
});

// DELETE API - Remove a food item
app.delete("/food/:item", (req, res) => {
    const { item } = req.params;
    const index = foodItems.indexOf(item);

    if (index === -1) {
        return res.status(404).json({ error: "Food item not found" });
    }

    foodItems.splice(index, 1);
    res.json({
        message: "Food item deleted successfully",
        items: foodItems
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
