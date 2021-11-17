//@ts-ignore
const Redis = require('ioredis')
const { key } = require('../secrets/secrets')
const redis = new Redis(key)
module.exports = {redis}
