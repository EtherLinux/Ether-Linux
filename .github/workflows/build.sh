##########################################################################

name: Build CI 

on:
  push:
    branches:
      - main
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    container:
      image: debian
      options: --privileged
      volumes:
        - /sys/fs/cgroup:/sys/fs/cgroup

    steps:
      - uses: actions/checkout@v2
##########################################################################
      - name: Install Depends
        run: apt update && apt install sudo live-build -y 

      - name: Build Ether Linux 
        run: bash build.sh

      - name: Upload Build Log
        uses: actions/upload-artifact@v2
        with:  
            name: Build Log
            path: build.log
            if-no-files-found: error
      - name: Upload Ether Linux Iso
        uses: actions/upload-artifact@v2
        with:
            name: Ether-Linux-Pentest-x86_64
            path: ether-pentest-1.01_amd64.iso
            if-no-files-found: error