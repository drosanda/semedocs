<template>
    <div class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="breadcrumbs">
              <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
              <li class=""><NuxtLink to="/library">Library</NuxtLink></li>
            <li class="unavailable">Seme Email</li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column">
        <div class="content">
          <h1 class="">Seme Email</h1>
					<p>Seme Email is library for sending email from Seme Framework. Seme Email has HTML email template for dynamic content of html.</p>
					<hr>
					<h2>How to use</h2>
					<p>First we have to loaded library by using library loaded:</p>
					<pre>$this->lib('seme_email');</pre>
					<p>You can put libary loader in constructor of controller or on each method in your controller.</p>
          <h2>Basic Usage</h2>
          <p>Seme Log only have one method called <b>write</b> for writting log into file log. Here is the example:</p>
          <pre>Class Product extends SEME_Controller{
  public function __construct(){
    $this->lib('seme_log');
  }
  public function index(){
        $replacer = array();
        $replacer['site_name'] = $this->site_name;
        $replacer['nama'] = $nama;
        $replacer['activation_link'] = $link;
        $this->seme_email->flush(); //optional
        $this->seme_email->replyto($this->site_name,$this->site_replyto);
        $this->seme_email->from($this->site_email,$this->site_name);
        $this->seme_email->subject('Registration Successful');
        $this->seme_email->to($email,$nama);
        $this->seme_email->template('account_register');
        $this->seme_email->replacer($replacer);
        $this->seme_email->send();
  }
}</pre>
          <h2>Methods</h2>
          <p>Seme Email has several methods that can used for sending email properly.</p>
          <h3>From Method</h3>
          <p>This method mandatory for declare origin of email. Required two parameter, first parameter is email and the second parameter is name of sender.</p>
          <h3>Subject Method</h3>
          <p>This method mandatory for declare title of email. Required one parameter contained about your summary.</p>
          <h3>Subject Method</h3>
          <p>This method mandatory for declare title of email. Required one parameter contained about your title or summary from email content.</p>
          <h3>To Method</h3>
          <p>This method mandatory for declare target of email. Required two parameter, first parameter is email and the second parameter is name of sender. Can be called more than once for sending multiple email address.</p>
          <h3>Template Method</h3>
          <p>This method only required if you one to create html formatted email. Default location about this file is in kero/lib/seme_email/template/. You can replace the string with "replacer" for creating dynamic email. Here is the example:</p>
          <pre>&#x3C;html&#x3E;
  &#x3C;body&#x3E;
    &#x3C;p&#x3E;Hi {{first_name}},&#x3C;/p&#x3E;
    &#x3C;p&#x3E;Thank you for using seme framework&#x3C;/p&#x3E;
  &#x3C;/body&#x3E;
&#x3C;/html&#x3E;</pre>
          <p>On HTML script above, we can see the <b>{{first_name}}</b> code. You can replace this string with real name through the script.</p>
          <h3>Replacer Method</h3>
          <p>This method allow replacing string on email template with coding. Here is the example:</p>
          <pre>$replacer = array();
$replacer['first_name'] = 'Agus Setiawan';
$this->seme_email->replacer($replacer);</pre>
          <p>If this example combined with email template above, you can send email with <b>{{first_name}}</b> replaced by <b>Agus Setiawan</b>.</p>
          <h3>Flush method</h3>
          <p>Use this method for clearing assigned properties used before.</p>
          <h2>Special Notes</h2>
          <p>Please makes more attention if you want to send email by following community guidance for email usage. If your email always sent to spam, you have to use real domain and real working email.</p>
          <p>Google has completed guide for email usage. Here is the quick explanation:</p>
          <ul>
            <li>Always put Subject on email.</li>
            <li>Body or main content email consist of greetings, main content, and footer.</li>
            <li>Avoid attachment.</li>
            <li>For default purpose always use noreply@example.com, adjust example.com to your domain.</li>
            <li>For money related email content use finance@example.com and makes sure the email is active.</li>
            <li>For marketing purpose please use real name of marketing such as adry@example.com and makes sure the email is active can be replied.</li>
          </ul>
				</div>
      </div>

        </div>
      </div>
    </div>
  </template>
<script>
  export default {
    layout: 'v3.1'
    // page component definitions
  }
</script>

