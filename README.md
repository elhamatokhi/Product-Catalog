# React Router v7 — Product Catalog (Multi-Page Application)

## Overview

This project is a multi-page **Product Catalog** application built with **React** and **React Router v7**. It demonstrates core routing concepts including dynamic routes, nested routes, layout routes, and programmatic navigation using modern React Router syntax.

The application allows users to browse a list of products and view detailed information for each item within a structured layout.


## Features

### 1. Application Routes

The application includes the following routes:

| Route           | Description                       |
| --------------- | --------------------------------- |
| `/`             | Home page                         |
| `/products`     | Products layout with product list |
| `/products/:id` | Dynamic product details page      |
| `*`             | 404 Not Found page                |



### 2. Navigation

* Persistent top navigation bar displayed on all pages
* Implemented using `NavLink`
* Active link styling for the current route

### 3. Products Data

* Local data array 
* Each product includes:

  * `id`
  * `name`
  * `price`
  * `category`
  * `description`

### 4. Nested Routing Structure

The `/products` route functions as a **layout route** that includes:

* Page heading
* Description or placeholder filter section
* `<Outlet />` for nested route rendering



### 5. Product List Page

* Displays all products in a structured layout (grid or list)
* Each product includes a **View Details** link
* Navigates to `/products/:id`



### 6. Product Details Page

* Displays:

  * Name
  * Price
  * Category
  * Description
* Handles invalid IDs with:

  * Professional “Product not found” message
  * Navigation link back to `/products`


## Technical Implementation

* Built with React
* Uses React Router v7 
* Organized project structure:

```
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── App.jsx
 └── main.jsx
```


## Installation & Usage

To run the application locally:

```bash
npm install
npm run dev
```

The development server will start and the application will be accessible in the browser.


## Author

**Elhama Tokhi**


## License

This project is developed for educational purposes.
