module.exports = (req, res, next) => {
    console.log(`Ip cliente: ${req.connection.remoteAddress}`);
    next();
}