# Kampung.SG

Interfaith LMS in collaboration with Google and Being Bridges

## Deployment

The file structure is as follows.

```text
.
├── api-gateway
│   ├── app
│   ├── Dockerfile
│   ├── cloudbuild.yaml
│   └── ...
├── frontend
│   ├── public
│   ├── src
│   ├── Dockerfile
│   ├── cloudbuild.yaml
│   └── ...
├── users-microservices
│   ├── app
│   ├── Dockerfile
│   ├── cloudbuild.yaml
│   └── ...
└── docker-compose.yml
```

To deploy each service, run `gcloud builds submit` in each service folder.

## Local Development

### Docker Compose

To run each service with its own containers, run this command in the root directory:

```sh
docker compose up -d
```
