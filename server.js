var express = require("express");
var app = express();
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get('/api/v1/reservations', (req, res) => {
    res.send(JSON.stringify(reservations, null, 2));
});

app.get('/api/v1/watilist', (req, res) => {
    res.send(JSON.stringify(waitList, null, 2));
});

app.post('/reservation', (req, res) => {
    let body = req.body;
    let obj = {
        routeName: body.routeName,
        name: body.name,
        phoneNumber: body.phoneNumber,
        email: body.email,
        UniqueID: body.UniqueID
    };

    if (reservations.length <= 5)
        reservations.push(obj);
    else
        waitList.push(obj);

    res.status(200).send();
});

app.listen(PORT, function () {
    console.log(`Breakfast Club on PORT ${PORT}`);
});

let reservations = [
    {
        routeName: "awesome",
        name: "The Awesome family",
        phoneNumber: "(123)123-1234",
        email: "helloWorld@yahoo.com",
        UniqueID: "ab123"
    }
];

let waitList = [];

