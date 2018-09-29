# Immutability Website

Repository for the static web files making up [Immutability, LLC's website][immutability-io].

## Colors

| Color            | HEX       |
| ---------------- | --------- |
| "Immutable Blue" | `#6ea8ff` |
| Charcoal         | `#393939` |
| Grey             | `#666666` |

## Local Development

Run `make serve` to launch a webserver inside of a [Jekyll] Docker container, reachable at `http://127.0.0.1:4000/`. [Jekyll][jekyll] will watch and rebuild the website automatically as you modify the source files. You may need to pull the [Jekyll Docker image][jekyll-docker] first (`docker pull jekyll/jekyll`).

[immutability-io]: https://immutability.io
[jekyll-docker]: https://hub.docker.com/r/jekyll/jekyll/
[jekyll]: https://jekyllrb.com/
