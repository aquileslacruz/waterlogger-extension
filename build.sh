#!/bin/bash
rm -rf build

cd popup && yarn build && cd ..
cd admin && yarn build && cd ..

mkdir build
cp -r popup/build build/popup
cp -r admin/build build/admin
cp manifest.json build/manifest.json