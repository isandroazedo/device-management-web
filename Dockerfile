FROM github.com/isandroazedo/device-management-web-base
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/device-management-web /usr/share/nginx/html