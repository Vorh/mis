#!/bin/bash

#ssh castle systemctl stop ganache
#ssh castle rm -r /root/ovn/ganache_poly
#ssh castle systemctl start ganache
#ssh castle sh /root/ovn/refresh.sh


tag=1
token=$1


npm run build

docker build . -t cr.yandex/crpg11k469bhc8lch9gm/mis/app:$tag


docker login \
         --username oauth \
         --password $token \
        cr.yandex

docker push  cr.yandex/crpg11k469bhc8lch9gm/mis/app:$tag


ssh castle docker login \
         --username oauth \
         --password $token \
        cr.yandex

ssh castle docker pull cr.yandex/crpg11k469bhc8lch9gm/mis/app:$tag
ssh castle docker-compose -f /root/docker/docker-compose.yaml up -d --no-deps mis-app


ssh castle docker logs mis-app -f


