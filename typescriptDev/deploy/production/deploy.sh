#!/bin/bash

# copy the tar file to the server
# untar the tar file to the deployment directory
sudo apt update
sudo apt install -y node npm
# cd to deployment directory
node index.js