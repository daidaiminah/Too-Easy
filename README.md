# Too Easy - Clothing Brand Website

A modern e-commerce website for Too Easy clothing brand with a clean, minimalist design that showcases the brand's products.

## Project Overview

Too Easy is a minimalist-meets-streetwear fashion brand aiming to deliver clean, bold, and comfortable looks. This project implements both the frontend and backend for the Too Easy website.

**Slogan:** _"Effortless Style for Every Step."_

## Tech Stack

### Frontend
- **Framework**: Next.js
- **State Management**: Redux Toolkit with RTK Query
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **UI Libraries**: Headless UI, Lucide Icons, Framer Motion

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT
- **Payment Integration**: Stripe

## Features

- Product catalog with filtering
- Product detail pages with image gallery
- Shopping cart and checkout functionality
- User authentication (login/register)
- User dashboard for managing orders and profile
- Admin dashboard for managing products, orders, and users
- Contact form
- Responsive design for mobile and desktop

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Set up your PostgreSQL database and update the `.env` file with your database credentials.

4. Run database migrations:
```bash
npx sequelize-cli db:migrate
```

5. Start the development server:
```bash
npm run dev
```

The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at http://localhost:3000

## Project Structure

### Client
- `/src/components`: Reusable UI components
- `/src/pages`: Next.js pages and routes
- `/src/redux`: Redux store, slices, and API configuration
- `/src/styles`: Global styles and Tailwind configuration
- `/src/assets`: Static assets like images and logos
- `/src/utils`: Utility functions and helpers

### Server
- `/controllers`: Request handlers
- `/middlewares`: Express middleware functions
- `/models`: Sequelize models for database tables
- `/routes`: API route definitions
- `/config`: Configuration files for database and services
- `/services`: Business logic and external service integrations

## Images

The website uses product images located in the root directory. These images are used throughout the website for product displays, banners, and marketing content.

    ## Environment Variables

    ### Client (.env.local)
    ```
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
    NEXT_PUBLIC_STRIPE_KEY=pk_test_yourteststripekeyhere
    ```

    ### Server (.env)
    ```
    PORT=5000
    DB_NAME=tooeasydb
    DB_USER=postgres
    DB_PASS=yourpassword
    DB_HOST=localhost
    JWT_SECRET=ultrasecret
    STRIPE_SECRET_KEY=sk_test_yourstripesecretkeyhere
    ```

    ## License

    This project is created for demonstration purposes.
