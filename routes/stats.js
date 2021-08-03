// @ts-check
const express = require('express');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const { countItems } = require('../infrastructure/stats/stats.repo');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { tracker_id: id, from, to } = req.query;
    const { results } = await countItems(id, from, to);
    res.status(StatusCodes.OK).send(results);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
});

module.exports.statsRouter = router;
