import Redis from 'ioredis'
import { key } from '../secrets/secrets'
const redis = new Redis(key)

export default redis
