
# Marketplace Builder 

Technical Foundation of Q commerce


![Coding Architechure](https://private-user-images.githubusercontent.com/117274549/404473692-9611b469-4e9c-4c13-a183-f96558978932.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzcxNTY2OTcsIm5iZiI6MTczNzE1NjM5NywicGF0aCI6Ii8xMTcyNzQ1NDkvNDA0NDczNjkyLTk2MTFiNDY5LTRlOWMtNGMxMy1hMTgzLWY5NjU1ODk3ODkzMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExN1QyMzI2MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mM2E5YmQ4ZTFkZWIxMDQzZTBlYjFiYWE2YzdmNDk0NTU2NWIxMDYwNmNiMzEyNWYzMGExOWZkOWViZjRmMDFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ucc3u-gANj3BgLvA22KCuD2UlvhH7xCpauqes90Q-Tc)




## Tech Stack

**Frontend:** Next.js HTML, and TailwindCSS for a responsive, dynamic and user-friendly interface.


**Backend:** Use Sanity CMS for managing products, customer profiles and order records.


**Content Management System(CMS):** Sanity CMS for efficient product and order data Management.

**API Requirements:**

**1. Products API:** Custom API to manage and display products dynamically.

**2. Shipment API:** Integration with **Leopards Courier API** for seamless order delivery tracking.

**3. Payment API:** Integration with **Easypaisa** and **Jazzcash** to facilitate smooth online transctions, especially for users without traditional bank accounts.


## Features

- **User Registration & Authentication:** Secure sign-up and login system powered by Auth.js.

- **Product Listings:** Browse available drones for rent, including detailed specifications and rental durations.

- **Cart & Checkout:** Add drones to your cart and proceed with checkout, including personal information and delivery details.

- **Order Tracking:** Real-time order tracking with ShipEngine to monitor shipping status.



## Installation Dependencies


```bash
  Tailwind CSS
  Axios
  Mongoose
  NextAuth.js
  Stripe API
  ShipEngine API
  Animate.css (for animations)
  Sanity Client Library 
```
    
## How Customers Use Our App:


**1. Sign Up:** Customers can easily create an account by filling out a simple form. Their details will be saved in our system.

**2. Login:** Customers log in to their account using Auth.js. When they click "Sign In," Auth.js will take care of logging them in.

**3. Browse Products:** Customers can look through all the products and see more details about each one.

**4. Add Products to Cart:** Customers can add products to their cart. The number of items they select will be saved in our system and shown in the cart.
 
**5. Payment Gateway:** Once customers are ready to complete their order, they can proceed to the payment page. Here, they can choose their preferred payment method (like credit/debit card, PayPal, etc.) and securely make the payment. After the payment is successful, they will receive a confirmation of their order.

**6. Checkout:** Customers can go to checkout, fill in their details (like name, email, address, and shipping info), and click "Checkout" to place their order.

**7. Order Tracking:** After placing an order, customers can track it by clicking the "Track Order" button. They’ll get all the details about their order.





![Coding GIF](https://private-user-images.githubusercontent.com/117274549/404473912-d228813e-a450-48dd-9b60-f1a9c1ce4123.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzcxNTY4MTIsIm5iZiI6MTczNzE1NjUxMiwicGF0aCI6Ii8xMTcyNzQ1NDkvNDA0NDczOTEyLWQyMjg4MTNlLWE0NTAtNDhkZC05YjYwLWYxYTljMWNlNDEyMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExN1QyMzI4MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMDE0MGE4OTlmNThhNGJjMThlODI1YjI0ZjAyOTkxZTlhYmJjNWQwYzhlMTRmMzZkZjA0MjFkZDA3NGRhYjc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.k2YFnClVnwPyeX0PH4TvuMJrngo_0wBfqOFYdcb9bI0)
