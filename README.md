# kennect-task-3

Simple Node server with the functionality of adding and subtracting operations on dates.

## How to setup the server locally

-   git clone the repo and do a `npm install`
-   create a .env file to customise the port number (optional), by default, it's on port 8000
-   run the command: `npm run dev` to start the server locally.

## Operations

### Add days, weeks to date

-   sample API request URL: `http://localhost:8000/api?operation=add&days=10&weeks=1&to=12-12-2023`
-   sample response: `{ "date": "29/12/2023" }`

### Subtract days, weeks to date

-   sample API request URL: `http://localhost:8000/api?operation=subtract&days=10&weeks=1&to=12-12-2023`
-   sample response: `{"date": "25/11/2023"}`
