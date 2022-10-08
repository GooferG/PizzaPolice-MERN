Getting Started:
---
npm i -y
npm run dev
nodemon server
---
---
Add .env file with DB config and PORT info:
-
MONG_URI=
-
PORT=
**
----

- API Endpoints (for Owner)

GET /toppings --> Gets all the toppings documents

POST /toppings --> Creats a new toppings document

GET /toppings/:id --> Gets a single toppings document

DELETE /toppings/:id --> Deletes a single topping

PATCH /pizzas/:id --> Updates a single toppping

---

- API Endpoints (for Chef)

GET /pizzas --> Gets all the pizza documents

POST /pizzas --> Creates a new pizza document

GET /pizzas/:id --> Gets a single workout document

DELETE /pizzas/:id --> Deletes a single pizza

PATCH /pizzas/:id --> Updates a single workout
# PizzaPolice-MERN
