import type { DBCLient } from "../dbClients";
import { Service } from "./service";

export class SetService extends Service {
  constructor(dbClient: DBCLient) {
    super(dbClient);
  }

  getById(id: number) {
    return this.dbClient.findUniqueSet({
      where: { id },
    });
  }
}
