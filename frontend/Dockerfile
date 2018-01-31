FROM nginx:alpine
#RUN yum -y update && yum install -y curl
COPY environment/default.conf /etc/nginx/conf.d/default.conf

ADD dist/assets/ /usr/share/nginx/html/assets
ADD dist/favicon.ico /usr/share/nginx/html
