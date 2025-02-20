#!/bin/bash

npm install --global yarn
npm upgrade --global yarn

./yarn_install.sh

cd SERVER
./install.sh

cd ../CLIENT
./install.sh

cd ../MOBILE
./install.sh

cd ..

read -p "Press Enter to continue..."
