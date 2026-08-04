import jwt from "jsonwebtoken";
import { Service } from "./service";
import type { DBCLient } from "../dbClients";

export class AuthService extends Service {
  constructor(dbClient: DBCLient) {
    super(dbClient);
  }

  async authUser(user: { login: string; password: string }) {
    const found = await this.dbClient.findUniqueUser({
      where: {
        name: user.login,
      },
    });

    // TODO: Encrypt password later
    if (found?.password === user.password) return true;

    return false;
  }

  async checkAuth(token: string) {
    const { user } = jwt.verify(token, import.meta.env.VITE_JWT_SECRET) as {
      user: string;
    };

    const found = await this.dbClient.findUniqueUser({
      where: {
        name: user,
      },
    });

    if (found) return found.name;

    return false;
  }
}
