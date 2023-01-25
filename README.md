# Bryntum Gantt with Google Sheets data

A Gantt chart configured by data from a Google Sheet.

Frontend = [Bryntum Gantt](https://bryntum.com/products/gantt/docs/guide/Gantt/quick-start/javascript-npm)

Backend = Express server

Logic:

1. Frontend Gantt chart loads data from the `/download` route of the server.
2. Server uses `request` to get data from Google Sheets CSV.
3. Server logic transforms data to suite Bryntum Gantt and returns the data to the Gantt
4. The front end displays the data in a Gantt chart format.

## Get started

1. Follow [these steps](https://bryntum.com/products/gantt/docs/guide/Gantt/quick-start/javascript-npm#access-to-npm-registry) to install a Bryntum Gantt.
2. Create a `.env` file to store your Google sheet id as follows:

```
SHEET_ID = "<your-id-here>"
```

3. Run:

```
npm run server
```

in one terminal and:

```
npm run start
```

in another.
