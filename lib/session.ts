import nextSession from 'next-session';
import {expressSession, promisifyStore} from 'next-session/lib/compat';
import redisStoreFactory from 'connect-redis';
const redis = require('redis');

const RedisStore = redisStoreFactory(expressSession);

const redisClient = redis.createClient({legacyMode: true});

redisClient.connect().catch(console.error);

const connectStore = new RedisStore({
  client: redisClient,
});

const options = {
  store: promisifyStore(connectStore),
};
export const getSession = nextSession(options);
