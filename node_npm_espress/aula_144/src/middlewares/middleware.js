exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'teste';
    next();
};

