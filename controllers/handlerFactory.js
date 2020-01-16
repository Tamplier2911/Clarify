const catchAsync = require("../utils/catchAsync");

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document) {
      return res.status(404).json({
        status: 404,
        error: "Not Found",
        message: "No document found with that ID."
      });
    }

    res.status(204).json({
      status: "success",
      message: null
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!document) {
      return res.status(404).json({
        status: 404,
        error: "Not Found",
        message: "No document found with that ID."
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        data: document
      }
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const document = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: document
      }
    });
  });

exports.getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOptions) query = query.populate(populateOptions);

    const document = await query;

    if (!document) {
      return res.status(404).json({
        status: 404,
        error: "Not Found",
        message: "No document found with that ID."
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        data: document
      }
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    // Nested route GET review allowance
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    // EXECUTE THE QUERY (await)
    const document = await features.query;

    // Statistics for query
    // const document = await features.query.explain();

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: document.length,
      data: {
        data: document
      }
    });
  });
