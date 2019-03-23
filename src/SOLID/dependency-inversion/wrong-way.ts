export class MySqlConnector {
    connect(): void {
      console.log('My Sql connected successfully')
    }
}
  
export class Controller {
    constructor(private mySqlConnector: MySqlConnector) {
      this.mySqlConnector.connect();
    }
}
  
  