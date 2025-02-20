#!/bin/bash

set -x

mkdir -p SERVER/dist
mkdir -p CLIENT/dist

cd SERVER
./build.sh

cd ../CLIENT
./build.sh

cd ..

read -p "Press Enter to continue..."
