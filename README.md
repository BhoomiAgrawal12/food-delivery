# MERN Stack Food Ordering Website

## Overview

This is a food ordering web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can browse menus, add food items to their cart, and make secure payments.

---

## Features

- **User Authentication**: Users can sign up and log in to access their accounts.
- **Menu Browsing**: Browse a variety of food items with descriptions and prices.
- **Cart Functionality**: Add, update, or remove items from the cart.
- **Order Placement**: Place orders seamlessly with a clean and intuitive UI.
- **Payment Gateway Integration**: Secure payments for orders.
- **Order History**: View previously placed orders.

---

## Tech Stack

### Frontend
- **React.js**: For building the user interface.
- **React Router**: For navigation.

### Backend
- **Node.js**: For server-side logic.
- **Express.js**: For handling routes and API endpoints.

### Database
- **MongoDB**: For storing user data, menu items, orders, and payment details.

### Payment Integration
- **Stripe**: For secure payment processing.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/BhoomiAgrawal12/food-delivery.git
    cd food-delivery
    ```
2. Install dependencies for the frontend and backend:
    ```bash
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```
3. Create a `.env` file in the backend directory and configure the following environment variables:
    ```env
    PORT=3000
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret
    STRIPE_SECRET_KEY=your-stripe-secret-key
    ```
4. Start the development servers:
    ```bash
    # Backend
    cd backend
    npm run dev

    # Frontend
    cd ../frontend
    npm start
    ```
5. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## Folder Structure

```
root/
 ├── backend/
 │    ├── models/         # Mongoose models
 │    ├── routes/         # Express API routes
 │    ├── controllers/   # Business logic
 │    └── server.js       # Entry point

 ├── frontend/
      ├── src/
      │    ├── components/   # React components
      │    ├── pages/        # Page components
      │    └── App.js        # Main application entry point
```

---

## Contribution Guidelines

We welcome contributions to make this project better! Please follow these guidelines:

1. **Fork the Repository**: Start by forking the repository and creating a local clone.
2. **Set Up the Project Locally**: Follow the installation steps to set up the project on your machine.
3. **Work on Issues**: Check the issues section for tasks or report a new one.
4. **Create a Branch**: Create a feature branch for your changes.
    ```bash
    git checkout -b feature/your-feature-name
    ```
5. **Test Your Changes**: Ensure your changes work as expected.
6. **Submit a Pull Request**:
    - Push your changes to your forked repository.
    - Open a pull request with a detailed description of your changes.
7. **Review and Feedback**: Collaborate to review and improve your contribution.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

If you have any questions or suggestions, feel free to reach out:
- **Email**: bhoomiagrawal1212@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/BhoomiAgrawal12)

