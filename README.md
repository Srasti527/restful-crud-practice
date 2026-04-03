# RESTful CRUD Practice Project

A **Node.js & Express.js practice project** implementing RESTful APIs for CRUD operations.  
This project is inspired by a mini Quora-like app where users can create, edit, delete, and view posts.

---

## Features

- Create, Read, Update, Delete (CRUD) posts via RESTful APIs
- Uses **Express.js** for server and routing
- Uses **EJS** for templating (views)
- Serves static files from the `public/` folder
- Organized project structure for easy scalability

---

## Project Structure


restful-apis/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── views/
└── public/


- `index.js` → main server file  
- `views/` → EJS templates  
- `public/` → static assets (CSS, JS, images)  
- `.gitignore` → ignores `node_modules/` and other unnecessary files  

---

## How to Run

clone the repository

git clone https://github.com/Srasti527/restful-crud-practice.git

navigate to the project folder

cd "restful-apis"

install dependencies

npm install

start the server

node index.js

or use nodemon

npx nodemon index.js

open in browser

http://localhost:8080


---

## Tech Stack

- Node.js  
- Express.js  
- EJS (Embedded JavaScript templates)  
- HTML / CSS / JavaScript  

---

## Notes

- `node_modules/` is excluded via `.gitignore`  
- This project is for practice and learning purposes  

---

## Author

**Srasti** – 3rd-year student, learning Node.js and RESTful API development
