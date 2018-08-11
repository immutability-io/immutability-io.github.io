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

build:
	@echo ">> Building static pages..."
	@docker run \
		--interactive \
		--rm \
		--tty \
		--volume "$(shell pwd):/srv/jekyll" \
		jekyll/jekyll \
		jekyll build -It

spellcheck:
	@echo ">> Spell checking..."
	@misspell -error -source=text .

clean:
	@echo ">> Scrubbing..."
	@rm -rv _site

.PHONY: serve build clean
