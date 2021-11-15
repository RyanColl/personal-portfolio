# TERN Stack

#### T => Tailwind
#### E => Express
#### R => Redis
#### N => Nextjs

## Steps

1. Git Clone https://github.com/RyanColl/terrn-stack.git

2. cd terrn-stack

3. npm i

4. Add a folder called secrets, then a file called secrets.js
```mkdir secrets``` ```touch secrets.js```

5. Go to [Upstash](https://console.upstash.com/) and make an account and create a new database.

6. Go to your new database and find the string under details that starts with rediss://:

7. in secrets.js add the following code, using the previous string inside the key
```js
module.exports = {key: 'rediss://:putyourcodehere'}
```
