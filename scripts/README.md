# Scripts

It is assumed that if you are running these scripts you are a developer running these on your local environment

## About AWS ECR Registries

One (stupid thing IMO) about AWS ECR is that it is one image per repository. 

See this Stack Overflow question: 

https://stackoverflow.com/questions/37540921/push-docker-image-to-amazon-ecs-repository


## Authentication

Make sure you run this command first, to authenticate your permissions to push to the AWS ECR

```
aws ecr get-login --no-include-email
```

Then run the docker login command it outputs


## Other useful commands

```
aws ecr describe-repositories
aws ecr list-images --repository-name test-repo
```