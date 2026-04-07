# Quora Posts CRUD App

A simple **full-stack CRUD app** for posts built with **Node.js, Express, EJS, and UUID**.  
Users can **create, read, update, and delete posts** with a simple interface.

---

## Features

- Create new posts with a username and content.
- View all posts in a list.
- See a post in detail.
- Edit a post’s content.
- Delete a post.
- Fully functional **in-memory database** using an array.
- Method override for PATCH and DELETE requests.
- Frontend powered by **EJS templates**.
- Static styling supported with `/public/style.css`.

---

## Tech Stack

- Node.js
- Express.js
- EJS
- UUID
- Method-Override

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Srasti527/restful-crud-practice.git
cd restful-crud-practice
``` 

2. Install dependencies:
```bash
npm install
``` 

3. Run the projcet
```bash
node index.js
``` 

4. Open in browser
```bash
http://localhost:8080/posts
``` 

---

## Usage

Navigate to /posts to see all posts.
Click Create New Post to add a post.
Click Edit to edit a post.
Click Delete to remove a post.
Click on See in detail to view a single post.

---

## Project Structure

/RESTFUL-APIS
├─ node_modules/         # installed npm packages (ignored in git)
├─ public/
│  └─ style.css          # CSS for styling
├─ views/
│  ├─ edit.ejs           # edit post form
│  ├─ index.ejs          # list all posts
│  ├─ new.ejs            # create new post form
│  └─ show.ejs           # view single post
├─ .gitignore            # ignores node_modules and other files
├─ index.js              # main server file
├─ package-lock.json     # npm dependency lock file
├─ package.json          # project dependencies and scripts
└─ README.md             # project documentation

## Notes
Data is stored in-memory, so it resets when the server restarts.
Use method-override to handle PATCH and DELETE requests from forms.
Customize style.css to improve the UI.
