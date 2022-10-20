Link to Live project: https://resilient-mandazi-5c94f4.netlify.app/

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

GET /toppings --> Gets all the toppings documents ✅

POST /toppings --> Creats a new toppings document ✅

GET /toppings/:id --> Gets a single toppings document ✅

DELETE /toppings/:id --> Deletes a single topping ✅

PATCH /toppings/:id --> Updates a single toppping ✅

---

- API Endpoints (for Chef)

GET /pizzas --> Gets all the pizza documents ✅

POST /pizzas --> Creates a new pizza document ✅

GET /pizzas/:id --> Gets a single workout document (working on this) ✅

DELETE /pizzas/:id --> Deletes a single pizza ✅

PATCH /pizzas/:id --> Updates a single workout (working on this) ✅
# PizzaPolice-MERN

### Screenshoots:


 

### Features to be added:

- [X] Display/Edit Pizzas

- [ ] Authentication

- [ ] Sort Items 

- [ ] Adding logic to update DB when ingredients are used. 


## Technologies Used

![MongoDB](https://img.shields.io/badge/-MongoDB-333?style=flat&logo=mongodb)
![Express](https://img.shields.io/badge/-Express-333?style=flat&logo=express)
![React](https://img.shields.io/badge/-React-333?style=flat&logo=react) 
![Node](https://img.shields.io/badge/-Node.js-333?style=flat&logo=node.js)
![JavaScript](https://img.shields.io/badge/-JavaScript-333?style=flat&logo=javascript) 
![HTML5](https://img.shields.io/badge/-HTML5-333?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS-333?style=flat&logo=css3)
![Git](https://img.shields.io/badge/-Git-333?style=flat&logo=git)
![Github](https://img.shields.io/badge/-GitHub-333?style=flat&logo=github)
![VSCode](https://img.shields.io/badge/-VS_Code-333?style=flat&logo=visualstudio)

Screenshots:

Main Page for Owner/Admin:
![image](https://user-images.githubusercontent.com/25205819/195224995-05bfaa3e-6ca4-4047-9aa4-d00dad17a054.png)

Main Page for Chef:
![image](https://user-images.githubusercontent.com/25205819/195225076-e451a185-ad24-4b30-b092-8455d768998a.png)

Editing Toppings:
![image](https://user-images.githubusercontent.com/25205819/195225110-7cdb1497-5967-4ff5-bd87-3181296204fd.png)

Editing Pizza:
![image](https://user-images.githubusercontent.com/25205819/195225137-1e6f29c8-0877-4485-90a4-f1c5d83217b7.png)
