echo "build and run application on port 19160"
docker build -t node-web-app .


sleep 1


id=$(docker ps | grep node-web-app | awk '{ print $1 }')
echo "id: $id";

[ $id ] && echo "present" && docker kill $id && \
    docker run --rm --name node-web-app -p 49160:3000 -d node-web-app; 
[ ! $id ] && echo "not present" && \
    docker run --rm --name node-web-app -p 49160:3000 -d node-web-app;



sleep 1

id=$(docker ps | grep node-web-app | awk '{ print $1 }')
echo "id: $id";


echo "check, with curlEx.sh, application (in docker) (id=$id) is working!!!"
./curlEx.sh

echo "check, with node requestEx.js, application (in docker) (id=$id) is working!!!"
./curlEx.sh


echo "to kill it, docker kill $id";

docker logs -f $id