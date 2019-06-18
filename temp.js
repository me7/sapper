function test_pg() {
    const { Pool } = require('pg')
    const pool = new Pool({
        user: 'uuu',
        password: 'ppp',
        database: 'ddd'
    })

    pool.query('select * from tt1')
        .then(ret => console.log(ret.rows))
        .catch(e => console.log(e))
}

test_pg()