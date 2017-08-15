# hacktivpress-fajar
simple blog with vue and mongoose

## How To use

for server :

```
cd server
npm run dev
```

for client : 
```
cd client
npm run dev
```

## API End point

```
http://localhost:3000/api
```

### API article

Method | URL | Description |
------------ | ------------- | -------------- |
GET | /articles | get all
GET | /articles/:articleID | get one article
GET | /author/:author | get article by author
GET | /category/:category | get article by category
POST | /articles | create article
PUT | /articles/:articleID | edit one article
DELETE | /articles/:articleID | delete one article

### API user

Method | URL | Description |
------------ | ------------- | -------------- |
POST | /register | register user
POST | /login | login User
