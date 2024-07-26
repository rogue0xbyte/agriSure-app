const Land = require('../models/landModel');

exports.addLand = (req, res, next) => {
  const { surveyNumber, subdivisionNumber, talukNumber, state, landId, landName, userId } = req.body;
  const land = new Land({ surveyNumber, subdivisionNumber, talukNumber, state, landId, landName, userId });

  land.save()
    .then(result => res.status(201).json(result))
    .catch(err => next(err));
};

exports.getLands = (req, res, next) => {
  Land.find()
    .then(lands => res.json(lands))
    .catch(err => next(err));
};
