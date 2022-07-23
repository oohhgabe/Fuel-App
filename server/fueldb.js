import sqlite3 from 'sqlite3';
import Promise from 'bluebird';

class fueldb {
	// putting the db connection in the constructor seems nice because it auto runs but I would be a little worried because sqlite3 opens and closes the db connection when not in use. This should be re-opening it though.
	constructor() {
		// Creates a auth.db file for the database in current directory
    this.db = new sqlite3.Database("./fuel.db", (err) => {
      if (err) {
        console.log('Could not connect to database', err)
      } else {
        console.log('Connected to database')
      }
    })
  }
	// sql: sql code. ex: 'INSERT bla bla'. params: Technically optional. Will swap any ? from the sql code with the params
	run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log('Error running sql ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }

}

export default fueldb;