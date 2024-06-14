module.exports = {
    apps: [
        {
            name: "Coordinape_Bot",
            script: "node dist/index.js",
            env: {
                NODE_ENV: "dev",
                PORT: 3000
            },
            watch: true,
            merge_logs: true,
            time: true,
            autorestart: true,
        }
    ]
}