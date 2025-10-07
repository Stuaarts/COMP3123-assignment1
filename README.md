# COMP3123 - Full Stack Development  
## Assignment 1 – Employee and User Management API

**Student Name:** Lucas Tavares Criscuolo  
**Student ID:** 101500671  
**Course Code:** COMP3123  
**Assignment:** 1  

---

## How to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Stuaarts/COMP3123-assignment1.git
   cd COMP3123-assignment1
Install dependencies

bash
Copy code
npm install
Create the .env file
Add the following variables to a file named .env in the project root:

ini
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority
PORT=3000
Run the application

bash
Copy code
npm start
The server will start at http://localhost:3000.

Deployed Application
The project is hosted on Vercel at the following URL:
https://comp-3123-assignment1-burz8wr4n-stuaarts-projects.vercel.app

API Endpoints
User Routes
Method	Endpoint	Description	Status Codes
POST	/api/v1/user/signup	Create a new user account	201, 400, 409
POST	/api/v1/user/login	Authenticate an existing user	200, 401

Employee Routes
Method	Endpoint	Description	Status Codes
GET	/api/v1/emp/employees	Retrieve a list of all employees	200
POST	/api/v1/emp/employees	Create a new employee record	201
GET	/api/v1/emp/employees/:eid	Retrieve an employee by ID	200, 404
PUT	/api/v1/emp/employees/:eid	Update employee details by ID	200, 404
DELETE	/api/v1/emp/employees?eid=<id>	Delete an employee by ID	204, 404

Validation and Error Handling
Input validation is applied for required fields and data formats.

Invalid or missing data returns appropriate status codes (400 or 404).

Database and server errors are handled with try/catch blocks and custom messages.

Project Structure
pgsql
Copy code
COMP3123-assignment1/
│
├── src/
│   ├── controllers/
│   │   ├── employee.controller.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── employee.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── employee.routes.js
│   │   └── user.routes.js
│   ├── db.js
│   └── app.js
│
├── server.js
├── package.json
├── .env
└── README.md
