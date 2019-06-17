export async function get(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    let ret = { verb: 'GET' }
    res.end(JSON.stringify(ret))
}

export async function post(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    let body = req.body
    let verb = { verb: 'POST' }
    let ret = { ...body, ...verb }
    res.end(JSON.stringify(ret))
}