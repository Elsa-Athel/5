import { MongoClient } from 'mongodb';

const client = new MongoClient(encodeURI(process.env.MONGODB_URI), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function setUpDb(db) {
  db.collection('users').createIndex({ email: 1 }, { unique: true });
}

export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.MONGODB_DB);
  await setUpDb(req.db);
  return next();
}
