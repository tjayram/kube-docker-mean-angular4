kubectl run meankube-db  --image=mongo --port=27017
kubectl expose deployment meankube-db --type=NodePort
kubectl run meankube-seed --image=meankube-seed:v1
kubectl run meankube-api --image=meankube-api:v1 --port=10010
kubectl expose deployment meankube-api --type=NodePort
kubectl run meankube-web --image=meankube-web:v1 --port=4200
kubectl expose deployment meankube-web --type=NodePort
echo "starting meankube pods.. please wait few seconds..."
sleep 3
kubectl get pod
kubectl get service
kubectl get deployment
minikube service meankube-api
minikube dashboard
echo "Opending MEANKube Website..."
sleep 5
minikube service meankube-web
