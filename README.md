# Recipe Management System

This is a recipe management system built with Node.js, Express.js, and Sequelize.

## Getting Started

To set up and run the application, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Set up the database configuration in a separate file (e.g., `database.js`).
5. Create the database: `npx sequelize-cli db:create`
6. Run the migrations to create the Recipe table: `npx sequelize-cli db:migrate`
7. Generate seed data: `npx sequelize-cli db:seed:all`
8. Start the application: `npm start`

## API Endpoints

- GET /recipes: Retrieve a list of all recipes.
- GET /recipes/:id: Retrieve a specific recipe by ID.
- POST /recipes: Create a new recipe.
- PUT /recipes/:id: Update an existing recipe.
- DELETE /recipes/:id: Delete a recipe.

## Server-side Data Validation

The following fields are validated on the server-side using Sequelize's built-in validation methods:

- title: Required, minimum length of 3 characters.
- description: Required, maximum length of 500 characters.
- ingredients: Required, maximum length of 1000 characters.
- instructions: Required, maximum length of 5000 characters.

## Error Handling

The application handles errors and provides appropriate error messages for invalid requests or database errors.
