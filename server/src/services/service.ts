import type { DBCLient } from "../dbClients";

export class Service {
  protected dbClient: DBCLient;

  constructor(dbClient: DBCLient) {
    this.dbClient = dbClient;
  }
}
