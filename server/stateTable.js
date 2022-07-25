import fueldb from './fueldb.js';

class stateTable extends fueldb {
  constructor() {
    // Calls parent constructor first
    super();
    const sql = `CREATE TABLE IF NOT EXISTS states(state text)`
    this.run(sql)
  }

	createState(state) {
    return this.run(
      'INSERT OR IGNORE INTO states (state) VALUES (?)',
      [state]
    )
  }

	getStates() {
    return this.get(
      `SELECT * FROM states`)
  }

}

export default stateTable;