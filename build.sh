#!/bin/bash

if ! [ $(id -u) = 0 ]; then
   echo "Jalankan skrip ini sebagai root." >&2
   exit 1
fi

echo -e "\e[31mPastikan jalankan script ini menggunakan root atau sudo bash build.sh jika tidak bisa control + c\e[0m"
sleep 10.0

echo -e "\e[33m====================================================================\e[0m"
echo ""
echo -e "\e[34m"
figlet "Semangat woe walaupun gagal tetap lanjooottt"
echo -e "\e[0m"
echo ""
echo -e "\e[31mMudahan kagak gagal, awokawokaowkoawkoawko\e[0m"
echo ""
echo -e "\e[33m====================================================================\e[0m"

sleep 1.0

echo -e "\n\e[32m[+] Memulai build ......."

sleep 1.0

lb clean 
sudo lb build

mv live-image-*.hybrid.iso ether-pentest-1.01_amd64.iso

sleep 1.0

echo -e "\n\e[32m[+] Build telah selesai kamu bisa check apakah error atau tidak di build.log!!! .....\e[0m"
echo -e "\n\e[32m[+] Md5sum : \e[0m"
md5sum ether-pentest-1.01_amd64.iso
