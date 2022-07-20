import fueldb from './fueldb.js';

class usertable extends fueldb {
  constructor() {
    // Calls parent constructor first
    super();
    const sql = `CREATE TABLE IF NOT EXISTS users(username text not null, password text not null, PRIMARY KEY (username))`
    this.run(sql)
  }

	createUser(username, password) {
    return this.run(
      'INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)',
      [username, password])
  }

	updateUser(username, password) {
    return this.run(
      `UPDATE users 
			SET password = ?,
			WHERE username = ?`,
      [password, username]
    )
  }

	getByUsername(username) {
    return this.get(
      `SELECT * FROM users WHERE username = ?`,
      [username])
  }

}

export default usertable;