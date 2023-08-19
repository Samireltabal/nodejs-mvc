const pool = require('../Helpers/db')
const get = () => {
    return new Promise( (resolve, reject) => {
        pool.query('SELECT * FROM movies ORDER BY id ASC', (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(results.rows)
          })
    })
}

const find = (id) => {
  return new Promise( (resolve, reject) => {
    pool.query('SELECT * FROM movies where id = $1 limit 1' , [id], (error, results) => {
        if (error) {
          reject(error)
        }
        if(results.rowCount > 0) {
            resolve(results.rows[0])
        } else {
          reject('resource not found')
        }
      })
})
}

module.exports = { get , find }