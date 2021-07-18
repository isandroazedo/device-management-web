FROM github.com/isandroazedo/device-management-web-base

COPY nginx.conf /etc/nginx/nginx.conf

ADD . .

RUN npm run build

RUN cp -R ./dist/device-management-web/*.* /usr/share/nginx/html/

RUN chmod +x wait-for-it.sh

RUN chmod +x start.sh

CMD ["./start.sh"]