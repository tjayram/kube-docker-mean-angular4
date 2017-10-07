eval $(minikube docker-env)
docker build -t meankube-seed:v1 ./db
docker build -t meankube-api:v1 ./meankube-api
docker build -t meankube-web:v1 ./meankube-web
