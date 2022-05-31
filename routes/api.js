const express = require("express");
const detailExample = require("../DetailExample");
const apiRouter = express.Router();
const summaryExample = require('../SummaryExample');

apiRouter.get('/', (req, res) => {
    res.status(200).send(summaryExample);
})

apiRouter.get('/details', (req, res) => {
    res.status(200).send(detailExample);
});

module.exports = apiRouter;