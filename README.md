# Culinary Recipe List

This application is an API for managing product and product category data within a culinary recipe list, built using Express JS and Prisma.

## Overview

The Culinary Recipe List is an API that allows users to manage product and product category data used in various culinary recipes. By leveraging the Express JS framework to build the server and Prisma as the ORM (Object-Relational Mapping), this application provides an efficient and structured way to interact with the database.

## Features

- **Product Management**: API for creating, reading, updating, and deleting (CRUD) product data.
- **Product Category Management**: API for CRUD operations on product category data.
- **Data Validation**: Uses middleware to ensure the submitted data conforms to the expected schema.
- **Data Relationships**: Supports relationships between products and product categories.
- **API Documentation**: Endpoint for API documentation using Swagger.

## Installation

1. Clone this repository
   ```bash
   git clone https://github.com/reyhannaufalh/expressjs-culinary-recipes.git
   ```
2. Navigate to the project directory
   ```bash
   cd culinary-recipe-list
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Configure the `.env` file according to your database configuration
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase?schema=public"
   ```
5. Migrate the database using Prisma
   ```bash
   npx prisma migrate dev --name init
   ```
6. Start the server
   ```bash
   npm run server
   ```

## Usage

Once the server is running, you can access the API at `http://localhost:3000`. The available endpoints include:

- **Products**

  - `GET /products`: Get a list of all products
  - `GET /products/:id`: Get product details by ID
  - `POST /products`: Add a new product
  - `PUT /products/:id`: Update a product by ID
  - `DELETE /products/:id`: Delete a product by ID

- **Product Categories**
  - `GET /categories`: Get a list of all product categories
  - `GET /categories/:id`: Get product category details by ID
  - `POST /categories`: Add a new product category
  - `PUT /categories/:id`: Update a product category by ID
  - `DELETE /categories/:id`: Delete a product category by ID

## Contributing

If you want to contribute to this project, please create a pull request or open an issue for further discussion.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
