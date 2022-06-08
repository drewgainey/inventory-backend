const express = require("express");
const apiRouter = express.Router();
const summaryExample = require('../SummaryExample');
const inventoryRouter = require("./inventory");
const employeeRouter = require("./employee");
const computerRouter = require("./computer");
const monitorRouter = require("./monitor");
const headsetRouter = require("./headset");
const keyboardRouter = require("./keyboard");
const mouseRouter = require("./mouse");

apiRouter.get('/summary', (req, res) => {
    res.status(200).send(summaryExample);
})

apiRouter.use('/inventory', inventoryRouter);
apiRouter.use('/employees', employeeRouter);
apiRouter.use('/computers', computerRouter);
apiRouter.use('/monitors', monitorRouter);
apiRouter.use('/headsets', headsetRouter);
apiRouter.use('/keyboards', keyboardRouter);
apiRouter.use('/mouses', mouseRouter);

module.exports = apiRouter;