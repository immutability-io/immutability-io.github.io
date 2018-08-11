serve:
	@echo ">> Starting Jekyll server..."
	@docker run \
		--interactive \
		--rm \
		--tty \
		--publish "4000:4000" \
		--volume "$(shell pwd):/srv/jekyll" \
		jekyll/jekyll \
		jekyll serve

.PHONY: serve
