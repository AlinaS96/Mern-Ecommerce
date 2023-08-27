const jwt = require('jsonwebtoken')

async function fetchUser(req, res, next) {
    const token = req.cookies.access_token
    if (!token) {res.status(403).send('Unauthorized, absent token')}

    jwt.verify(token, process.env.JWT, (err,user) => {
        if(err) {res.status(403).send('invalid token')}
        req.user = user
        next()
    })
}


async function verifyUser(req, res, next) {
    const token = req.cookies.access_token
    if (!token) {res.status(403).send('Unauthorized, absent token')}

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) res.status(403).send('Invalid token')
        req.user = user
        if (req.user.id === req.params.id || (req.user.admin=='true')) {
            next()
        } else {
            res.status(401).send('You are unauthorized')
        }
    })
}

async function verifyAdmin(req, res, next) {
    const token = req.cookies.access_token
    if (!token) res.status(403).send('Unauthorized, absent token')

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err){ res.status(403).send('Invalid token') }
        req.user = user
        console.log(req.user)
        if (req.user.admin==='true') {
            next()
        }
        else {
            next(res.status(401).send('You are unauthorized'))
        }
    })
}

module.exports = { fetchUser, verifyUser, verifyAdmin }