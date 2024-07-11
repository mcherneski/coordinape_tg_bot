#!/bin/bash
source ~/.nvm/nvm.sh
~/.nvm/versions/node/v20.14.0/bin/pm2 startOrRestart /home/ec2-user/coordinape_tg_bot/ecosystem.config.js