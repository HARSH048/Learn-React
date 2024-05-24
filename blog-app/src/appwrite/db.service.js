import { Client, Databases, ID, Storage } from "appwrite";
import config from "../config/config";
class DbService {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.APPWRITE_URL)
      .setProject(config.APPWRITE_PROJECTION_ID);
    this.database = new Databases(this.Client);
    this.bucket = new Storage(this.client);
  }

  async createPost(data) {
    try {
      const { title, content, featuredImage, status, userId, slug } = data;
      return await this.database.createDocument(
        config.APPWRTITE_DATABASE_ID,
        config.APPWIRITE_COLLECTION_ID,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("error in create post function");
    }
  }

  async updatePost(slug, data) {
    try {
      const { title, content, featuredImage, status } = data;
      return await this.database.updateDocument(
        config.APPWRTITE_DATABASE_ID,
        config.APPWIRITE_COLLECTION_ID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("error in updatepost function", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.APPWRTITE_DATABASE_ID,
        config.APPWIRITE_COLLECTION_ID,
        slug
      );
      return true;
    } catch (error) {
      console.log("error in deletepost function", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.APPWRTITE_DATABASE_ID,
        config.APPWIRITE_COLLECTION_ID,
        slug
      );
    } catch (error) {
      console.log("error in getPost function", error);
    }
  }

  async getAllActivePost() {
    try {
      return await this.database.listDocuments(
        config.APPWRTITE_DATABASE_ID,
        config.APPWIRITE_COLLECTION_ID,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("error in getAllActivePost function", error);
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.APPWIRITE_BUCKET_ID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("error in upload file function", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.APPWIRITE_BUCKET_ID, fileId);
      return true;
    } catch (error) {
      console.log("error in delete file function", error);
      return false;
    }
  }

  async previewFile(fileId) {
    try {
      return this.bucket.file(config.APPWIRITE_BUCKET_ID, fileId);
    } catch (error) {
      console.log("error in preview file function", error);
      return false;
    }
  }
}

const dbService = new DbService();

export default dbService;
