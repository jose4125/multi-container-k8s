  docker build -t jose4125/multi-client:latest -t jose4125/multi-client:$SHA -f ./client/Dockerfile ./client
  docker build -t jose4125/multi-server:latest -t jose4125/multi-server:$SHA -f ./server/Dockerfile ./server
  docker build -t jose4125/multi-worker:latest -t jose4125/multi-worker:$SHA -f ./worker/Dockerfile ./worker
  # take those images and push them to docker hub
  docker push jose4125/multi-client:latest
  docker push jose4125/multi-client:$SHA
  docker push jose4125/multi-server:latest
  docker push jose4125/multi-server:$SHA
  docker push jose4125/multi-worker:latest
  docker push jose4125/multi-worker:$SHA

  kubectl apply -f k8s
  kubectl set image deployments/server-deployment server=jose4125/multi-server:$SHA
  kubectl set image deployments/client-deployment client=jose4125/multi-client:$SHA
  kubectl set image deployments/worker-deployment worker=jose4125/multi-worker:$SHA
