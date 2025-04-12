import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }

  // Sign Up
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method to login
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error('Error creating account:', error);
      throw error;
    }
  }

  // Log In
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  // Get Current User
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error('Error getting current user:', error);
    }

    return null;
  }

  // Log Out
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
