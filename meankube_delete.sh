kubectl delete service meankube-web
kubectl delete deployment meankube-web
kubectl delete service meankube-api
kubectl delete deployment meankube-api
kubectl delete deployment meankube-seed
kubectl delete service meankube-db
kubectl delete deployment meankube-db
echo "Deleted all MEANKube pods.. please wait..."
sleep 3
kubectl get pod
kubectl get service
kubectl get deployment
