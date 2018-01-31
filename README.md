# Webpack express/react template

This is a template for running an express server to serve up a dynamic base HTML, and react.

The problem this seeks to solve, is being able to dynamically set the HTML metatags, based on the URI.

## Development

Best way to deploy this for development is to using two terminal windows:

Window A (nodemon express backend):

`npm run dev`

Window B (webpack-dev-server for frontend):

`npm start`

(What's happening here is that the JS assets are recompiled using webpack-dev-server, but requests are proxied to express backend).



## Docker


### Building

Build each image separately

```
docker build -f Dockerfile.frontend -t my-frontend .
docker build -f Dockerfile.backend -t my-backend .

```

### Running it manually

You need to create a [docker network](https://docs.docker.com/engine/userguide/networking/#user-defined-networks)

```
docker network create --driver bridge mynetwork

```

Run the backend on the network, no need to expose ports.

```
docker run --name backend --network mynetwork my-backend
```

Run the frontend on the network, and expose port 80

```
docker run --name frontend --network mynetwork -p 80:80 my-frontend

```


**How this works**

By running the containers in a network, they can see each others' ports. On our exposed nginx container, we proxy the the requests to the backend.

[See the nginx config file](./environent/default.conf)

**nb. /z proxy**

Haven't worked out how to properly proxy the `/` location to backend properly, so I'm doing a rewrite to `/z`. 





### Running with Docker-Compose

**to come**
