FROM mongo

COPY products.json /products.json
CMD sleep 10 && mongoimport --host meankube-db --db meankube --collection products --type json --file /products.json && echo "MongoDB Import Completed"
