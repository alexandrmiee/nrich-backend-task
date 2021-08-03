### Build

- `sudo docker-compose build`
- `sudo docker-compose up`

### Track

- `GET http://localhost:3000/track?id=1`

### Stats

- `GET http://localhost:3000/stats?tracker_id=1&from=2021-08-01&to=2021-08-04`

### Integration tests

- `npm ci`
- `npm run test:int`

### Load tests

- `npm ci`
- `npm run test:load`
