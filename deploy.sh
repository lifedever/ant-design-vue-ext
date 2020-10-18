#!/usr/bin/env bash
yarn version
git add . && git commit -m 'coding'
git checkout master && git merge develop && git checkout develop
git push --all && git push --tag
npm publish --registry http://npm.kanasinfo.cn