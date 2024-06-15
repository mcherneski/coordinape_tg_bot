#!/bin/bash

echo 'run after_install.sh' >> /home/ec2-user/coordinape_bot_logs/deploy.log

echo 'cd /home/ec2-user/coordinape_tg_bot' >> /home/ec2-user/coordinape_bot_logs/deploy.log
cd /home/ec2-user/coordinape_tg_bot >> /home/ec2-user/coordinape_bot_logs/deploy.log

echo 'npm install' >> /home/ec2-user/coordinape_bot_logs/deploy.log
npm install >> /home/ec2-user/coordinape_bot_logs/deploy.log
npm install pm2 -g >> /home/ec2-user/coordinape_bot_logs/deploy.log
