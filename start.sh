read -n1 -p "Detach container? [Y,n] " detach
echo
echo "docker build . -t portfolio"
docker build . -t portfolio

case $detach in
  n|N)
    echo "docker compose up --remove-orphans"
    docker compose up --remove-orphans;;
  *)
    echo "docker compose up -d --remove-orphans"
    docker compose up -d --remove-orphans;;
esac

echo "system prune -a"
docker system prune -a