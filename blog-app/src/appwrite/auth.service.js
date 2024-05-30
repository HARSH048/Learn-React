import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.APPWRITE_URL) // Your API Endpoint
      .setProject(config.APPWRITE_PROJECTION_ID);

    this.account = new Account(this.client);
  }

  async createAccount(data) {
    try {
      const { email, password, name } = data;
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(data) {
    try {
      const { email, password } = data;
     return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.getCurrentUser();
    } catch (error) {
      console.log(`error in getcurrentUser function`);
    }
    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("error in logout user function");
    }
  }
}

const authService = new AuthService();

export default authService;
