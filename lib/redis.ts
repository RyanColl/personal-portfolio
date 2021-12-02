//@ts-ignore
import Redis from 'ioredis';
import { key } from '../secrets/secrets';
export const redis = new Redis(key)
