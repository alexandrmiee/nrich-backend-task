// @ts-check
const express = require('express');
const { v4 } = require('uuid');
const { mapToEntity } = require('../infrastructure/track/track.entity');
const { insertItem } = require('../infrastructure/track/track.repo');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    if (!req.query.id) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
      });
      return;
    }

    const userId = req.cookies['user_id'] || v4();
    res.cookie('user_id', userId);

    await insertItem(
      mapToEntity({
        date: new Date(),
        eventId: v4(),
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        trackerId: req.query.id,
        userAgent: req.headers['user-agent'] || 'none',
        userId: userId,
        url: new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`).toString(),
      }),
    );
    res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.OK);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
});

module.exports.trackRouter = router;
