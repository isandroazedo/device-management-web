.PHONY: build-image
image:
	@docker build -f Dockerfile -t github.com/isandroazedo/device-management-web .

.PHONY: run-app
run:
	@docker run --name device-management-web -d -p 8080:80 github.com/isandroazedo/device-management-web