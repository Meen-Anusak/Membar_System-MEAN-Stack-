module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    return res.json({
        status_code: statusCode,
        message: err.message,
        Validation: err.validation
    })
}