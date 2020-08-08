<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Home</NuxtLink></li>
            <li class="unavailable">Command Line Interface (CLI)</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Command Line Interface</h1>
					<p>Seme Framework now supporting command line interface (CLI) for executing the framework through the CLI.</p>
          <h2>Basic Usage</h2>
          <p>Please make sure you are in same directory with root framework directory</p>
          <pre>php index.php [controller | [directory in controller [controller]]] [method] [param1] [param2]...[paramN]</pre>
          <h2>Example</h2>\
          <p>In the example we will introduce how Seme Framework can be integrated with Cron Job<p>
          <h3>CronJob</h3>
          <p>If you want integrating with cron job executed every 4am and want to executed method fix in class home inside api_cron directory.</p>
          <pre>0 4 * * * /usr/bin/php /var/www/html/index.php api_cron home fix</pre>
          <p>You can adjusted the <i>/usr/bin/php</i> depends on your system.</p>
        </div>
      </div>
      
        </div>
      </div>
    </div>
  </template>
