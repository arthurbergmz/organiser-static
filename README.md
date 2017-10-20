# Serve static files
###### Organiser example
---

Serving static files at `localhost:3000` (default) with Organiser.

```javascript
@GET
async home () {
  return Response.static(path.join(__dirname, '../static/index.html')).build()
}
```

---

> _**Disclaimer:** misbehavior while serving static files with Organiser v1.0.0. You have to use Response as below:_

```javascript
@GET
async home () {
  return (await Response.static('../filepath.json')).build()
}
```

---

## how to run

1. install dependencies

```bash
$ npm install
```

2. compile scripts

```bash
$ npm run build
```

3. start server

```bash
$ npm start
```

## how to develop

1. install dependencies

```bash
$ npm install
```

2. start server (with hot reload)

```bash
$ npm run dev
```