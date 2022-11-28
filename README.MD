Run Backend

###install Docker

Get the latest Docker package

     sudo apt-get install docker docker.io
     sudo apt-get install docker docker-engine

or
sudo apt-get install docker docker-machine

Add yourself to the docker group, log out, and then login back to ensure that you can run Docker commands without sudo: sudo usermod -a -G docker $USER

Verify docker is installed correctly sudo docker run hello-world

to run backend :
docker-compose up -d --build
