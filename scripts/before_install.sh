#!/bin/bash
echo 'Cleaning up old files' >> /home/ec2-user/coordinape_bot_logs/deploy.log

sudo npm install pm2 -g
if [ -d "/home/ec2-user/coordinape_tg_bot/dist" ]; then
    rm -rf "/home/ec2-user/coordinape_tg_bot/dist"
fi 