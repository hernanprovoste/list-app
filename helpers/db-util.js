import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect('mongodb://hernan:PcvlaKqFwuMRYWa5@cluster0-shard-00-00.61zpk.mongodb.net:27017,cluster0-shard-00-01.61zpk.mongodb.net:27017,cluster0-shard-00-02.61zpk.mongodb.net:27017/events?ssl=true&replicaSet=atlas-l4mtvx-shard-0&authSource=admin&retryWrites=true&w=majority')

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}