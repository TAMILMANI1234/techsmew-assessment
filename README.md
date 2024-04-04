# Assessment Task
1. Form Component (React and Tailwind CSS) and For validation.
2. Student Table CRUD Operations by using RTK queries.

## About Task
   ### Form validation
   ![Screenshot (33)](https://github.com/TAMILMANI1234/techsmew-assessment/assets/81792499/7c23bc66-65e5-4912-86a4-41ba5ef0eaa6)

   ### CRUD operation using RTK Queries
   ![Screenshot (34)](https://github.com/TAMILMANI1234/techsmew-assessment/assets/81792499/1efcb5c3-c463-4d68-8d1b-2428cb43f176)

   
 ## Used Technology
   1. Vite+React
   2. Tailwind CSS
   3. Redux toolkit
   4. JSON Server

## Steps involved:
    1. Create a React Project using Vite by using below command
                          "npm create vite@latest project-name" using vite"
    2.After, Install Tailwind CSS using 
                           "npm install -D tailwindcss"
                           "npx tailwindcss init -p"
    3.Then Create component called formcomponen.jsx, mentioned in git repo and make form validation

    4. For CRUD operation install redux by using
                          "npm i @reduxjs/toolkit react-redux"
    5.Create two files called "apislice.jsx" for creating api queries, and "store.jsx" to store application state
    6.After write the logic for all CRUD operation in apislice.jsx the bind apislice with store mentioned in store.jsx
    7.Finally, connect store to React UI using Providers

### Note: 
"studentsdata.json" : JSON file for store student data from the react application via JSON server

## Run Application
   1. First run the JSON server in the port 3500 by using
             "json-server --watch data/studentdata.json --port 3500"
   2. Then, run react application in development environment
               "npm run dev"  or "npm start"
    




   

