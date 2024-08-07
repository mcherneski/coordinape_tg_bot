if pm2 list | grep -q Coordinape_bot; then
    echo 'Stopping pm2' >> /home/ec2-user/coordinape_bot_logs/deploy.log
    pm2 stop Coordinape_bot >> /home/ec2-user/coordinape_bot_logs/deploy.log
else
    echo 'Coordinape_bot is not running.' >> /home/ec2-user/coordinape_bot_logs/deploy.log
fi

DEPLOY_DIR=/home/ec2-user/coordinape_tg_bot

if [ -d "$DEPLOY_DIR" ]; then
    echo 'Removing old directory' >> /home/ec2-user/coordinape_bot_logs/deploy.log
    rm -rf "$DEPLOY_DIR/*"
else
    echo 'Directory does not exist' >> /home/ec2-user/coordinape_bot_logs/deploy.log
fi
    # echo 'Nothing to stop' >> /home/ec2-user/coordinape_bot_logs/deploy.log