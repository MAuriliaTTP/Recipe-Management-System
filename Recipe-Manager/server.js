const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { RecipeManager } = require('./models');
const app = express();
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
app.use(express.json())


// Retrieve a list of all recipes
app.get("/recipeManager", async (req, res) => {
  try {
    const recipes = await RecipeManager.findAll();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Retrieve a specific recipe by ID
app.get("/recipeManager/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await RecipeManager.findByPk(id);
    if (!recipe) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.json(recipe);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new recipe
app.post("/recipeManager", async (req, res) => {
  // const { title, description, ingredients, instructions } = req.body;

  console.log(req.body)
  try {
    const recipe = await RecipeManager.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      res.status(400).json({ error: error.message });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Update an existing recipe
app.put("/recipeManager/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, ingredients, instructions } = req.body;
  try {
    const recipe = await RecipeManager.findByPk(id);
    if (!recipe) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      await recipe.update({
        title,
        description,
        ingredients,
        instructions,
      });
      res.json(recipe);
    }
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Delete a recipe
app.delete("/recipeManager/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await RecipeManager.findByPk(id);
    if (!recipe) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      await recipe.destroy();
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});