run:
	npm start
deploy:
	npm run deploy -- -m "Deploy React app to GitHub Pages"
format:
	npx prettier . --write