module.exports = {
  apps: [
    {
      name: 'semedocs',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
    }
  ]
}
