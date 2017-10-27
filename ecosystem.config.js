module.exports = {
  apps: [{
    name: 'roommate-app-server',
    script: './server/app.js',
    env: {
      SERVER_PORT: 3000,
    },
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-107-21-176-57.compute-1.amazonaws.com',
      key: '~/.ssh/abodie.pem',
      ref: 'origin/master',
      repo: 'https://github.com/not-kosher/roommate-app-server.git',
      path: '/home/ubuntu/roommate-app-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
