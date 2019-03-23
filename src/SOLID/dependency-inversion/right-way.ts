
export interface IDbConnector {
  connect(): void
}

export class MySqlConnector implements IDbConnector {
  connect(): void {
    console.log('My Sql connected successfully')
  }
}

export class MongoDbConnector implements IDbConnector {
  connect(): void {
    console.log('Mongo Db connected successfully')
  }
}

export class Controller {
  constructor(private dbConnector: IDbConnector) {
    this.dbConnector.connect();
  }
}