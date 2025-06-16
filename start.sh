echo "docker build . -t portfolio"

docker build . -t portfolio

echo "docker compose up -d --remove-orphans"

docker compose up -d --remove-orphans

echo "docker image prune -a"

docker system prune -a