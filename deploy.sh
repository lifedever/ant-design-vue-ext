#!/usr/bin/env bash

yarn version

git add . && git commit -m "new version"
git checkout master && git merge develop && git checkout develop

git push --all && git push --tag