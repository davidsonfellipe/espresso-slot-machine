install:
	@if [ ! $$(which node) ]; then echo "✖ node..."; brew install node; else echo "node ✔"; fi

	if [ ! $$(which bower) ]; then echo '✖ bower...'; npm install -g bower; else echo "bower ✔"; fi

	if [ ! $$(which bower-installer) ]; then echo '✖ bower-installer...'; npm install -g bower-installer; else echo "bower-installer ✔"; fi

	@if [ ! $$(which grunt) ]; then echo '✖ grunt...'; npm install -g grunt-cli; else echo "grunt ✔"; fi

	@npm i --save-dev

	@bower-installer

	@grunt build

	@rm -rf bower_components/
