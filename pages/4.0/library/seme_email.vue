<template>
  <div class="section">
    <div class="container">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="breadcrumbs">
          <li class=""><NuxtLink to="/">Seme Framework</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0">4.0.3</NuxtLink></li>
          <li class=""><NuxtLink to="/4.0/library/">Library</NuxtLink></li>
          <li class="unavailable">Seme Email</li>
        </ul>
      </nav>
      <div class="columns">
        <div class="column">
          <div class="content">
            <h1 class="">Seme Email Library</h1>
            <p>The <code>Seme_Email</code> library purpose is for sending email from Seme Framework. Seme Email has HTML email template for dynamic content of html.</p>
            
            <h2>Class Structure</h2>
            <p>Here is the Structure of Seme Email Class.</p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  &#x3C;?php
                  Class Seme_Email {
                    public $log;

                    public function __construct() {}

                    public function from($from_email_address[, $name='']): Seme_Email {}

                    public function to($to_email_address[, $name='']): Seme_Email {}

                    public function subject($title_or_subject_email): Seme_Email {}

                    public function text($ascii_text): Seme_Email {}

                    public function html($html_content): Seme_Email {}

                    public function send(): Seme_Email {}

                    public function template($file_template_php): Seme_Email {}

                    public function replacer($array_of_string): Seme_Email {}

                    public function attachment_add($filepath[, $filename='']): Seme_Email {}

                    public function attachment_clear(): Seme_Email {}

                    public function getLog(): string {}

                    public function preview(): void {}
                  }
                </highlight-code>
              </div>
            </div>
            <hr>

            <h2>Basic Usage</h2>
            <p>
              You can put libary loader in constructor of controller or on each method in your controller.
              To use the Seme Email library, you can add a few lines of code to a controller in the Seme Framework. 
              The following is a basic example of implementing the Seme Email code in a Controller.
            </p>
            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                  &#x3C;?php
                  Class EmailRegister extends \SENE_Controller{
                    public function __construct(){
                      $this-&#x3E;lib('seme_email');
                    }
                    public function index(){
                      $this-&#x3E;seme_email-&#x3E;flush();
                      $this-&#x3E;seme_email-&#x3E;replyto('Support Example Website', 'support@cenah.co.id');
                      $this-&#x3E;seme_email-&#x3E;from('noreply@example.com', 'Adry from Example Website');
                      $this-&#x3E;seme_email-&#x3E;subject('Registration Successful');
                      $this-&#x3E;seme_email-&#x3E;to('agus.setiawan@example.com', 'Agus Setiawan');
                      $this-&#x3E;seme_email-&#x3E;text('Thank you for registering on Example website.');
                      $this-&#x3E;seme_email-&#x3E;send();

                      // optional, verbose the process
                      dd($this-&#x3E;seme_email-&#x3E;getLog());
                    }
                  }
                </highlight-code>
              </div>
            </div>
            <p>To run the process of sending email, you can simply call this class via the browser. Example: http://localhost/seme_framework/emailregister.</p>
            <h3>From Method</h3>
            <p>This method mandatory for declare origin of email. Required two parameter, first parameter is email and the second parameter is name of sender.</p>
            <h3>Subject Method</h3>
            <p>This method mandatory for declare title of email. Required one parameter contained about your summary.</p>
            <h3>To Method</h3>
            <p>This method mandatory for declare target of email. Required two parameter, first parameter is email and the second parameter is name of sender. Can be called more than once for sending multiple email address.</p>
            <h3>Template Method</h3>
            <p>
              This method only required if you one to create html formatted email. Default location about this file is in <code>kero/lib/seme_email/template</code>. 
              You can replace the string by using replacer method for creating dynamic email. Here is the example of HTML email template:
            </p>

            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="html">
                  &#x3C;html&#x3E;
                  &#x3C;body&#x3E;
                  &#x3C;p&#x3E;Hi {{full_name}},&#x3C;/p&#x3E;
                  &#x3C;p&#x3E;Thank you for using registering at {{site_name}}.&#x3C;/p&#x3E;
                  &#x3C;p&#x3E;You can clicking on this link {{dashboard_link}} to go to your dashboard.&#x3C;/p&#x3E;
                  &#x3C;/body&#x3E;
                  &#x3C;/html&#x3E;
                </highlight-code>
              </div>
            </div>
            <p>On HTML script above, we can see the <b>{{first_name}}</b> code. You can replace this string with real name through the script.</p>
            <h3>Replacer Method</h3>
            <p>This method allow replacing string on email template with coding. Here is the example:</p>

            <div class="macwindow">
              <div class="titlebar">
                <div class="buttons">
                  <div class="close">
                    <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                    <!-- close button link -->
                  </div>
                  <div class="minimize">
                    <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                    <!-- minimize button link -->
                  </div>
                  <div class="zoom">
                    <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                    <!-- zoom button link -->
                  </div>
                </div>
              </div>
              <div class="maccontent">
                <highlight-code lang="php">
                &#x3C;?php
                Class EmailRegister extends \SENE_Controller{
                  public function __construct(){
                    $this-&#x3E;lib('seme_email');
                  }
                  public function index(){
                    $replacer = array();
                    $replacer['site_name'] = 'Example Website';
                    $replacer['full_name'] = 'Agus Setiawan';
                    $replacer['dashboard_link'] = base_url('dashboard/');

                    $this-&#x3E;seme_email-&#x3E;flush();
                    $this-&#x3E;seme_email-&#x3E;replyto('Support Example Website', 'support@cenah.co.id');
                    $this-&#x3E;seme_email-&#x3E;from('noreply@example.com', 'Adry from Example Website');
                    $this-&#x3E;seme_email-&#x3E;subject('Registration Successful');
                    $this-&#x3E;seme_email-&#x3E;to('agus.setiawan@example.com', 'Agus Setiawan');
                    $this-&#x3E;seme_email-&#x3E;template('account_register');
                    $this-&#x3E;seme_email-&#x3E;replacer($replacer);
                    $this-&#x3E;seme_email-&#x3E;send();

                    // optional, verbose the process
                    dd($this-&#x3E;seme_email-&#x3E;getLog());
                  }
                }
                </highlight-code>
              </div>
            </div>
            <p>If this example combined with email template above, you can send email with <b>{{first_name}}</b> replaced by <b>Agus Setiawan</b>.</p>
            <h3>Flush method</h3>
            <p>Use this method for clearing assigned properties used before.</p>
            <hr />
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
  layout: 'v4.0',
  data() {
    return {
      full_name: '{{full_name}}',
      site_name: '{{site_name}}',
      dashboard_link: '{{dashboard_link}}',
      name: 'Seme Framework 4',
      suffix: ' - Seme Framework 4',
      title: 'Seme_Email Library',
      description: 'Learn more about Seme_Email Library on Seme Framework version 4.0',
      breadcrumbs: [
        {
          url: process.env.BASE_URL || 'http://localhost:3001',
          text: 'Seme Framework',
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0',
          text: '4.0'
        },
        {
          url: (process.env.BASE_URL || 'http://localhost:3001')+'/4.0/library',
          text: 'Library',
        }
      ],
    }
  },
  head() {
    return {
      title: this.title+this.suffix,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.name+': '+this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        }
      ]
    }
  },
  jsonld() {
    this.breadcrumbs.push({url: (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path, text: this.title });
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        "@type": "WebPage",
        '@id': item.url,
        name: item.text,
      },
    }));
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      },
      {
        "@type": "NewsArticle",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": (process.env.BASE_URL || 'http://localhost:3001')+this.$route.path.replace(/\/+$/, '') + '/'
        },
        "headline": (this.headline || this.title),
        "image": [
          (process.env.CDN_URL || 'http://localhost:3001')+'/logo.png'
        ],
        "dateCreated": "2021-08-11T19:52:38+07:00",
        "datePublished": "2021-08-11T19:52:38+07:00",
        "dateModified": "2023-07-04T23:46:00+07:00",
        "author": {
          "@type": "Person",
          "gender": "Male",
          "name": "Daeng Rosanda, S.Kom",
          "alternateName": "Daeng Rosanda",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "Cipta Esensi Merenah",
            "email": "hi@cenah.co.id"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Cipta Esensi Merenah",
          "description": "Cipta Esensi Merenah (Cenah) is software house company focused on developing web-based application from Bandung, Indonesia.",
          "logo": {
            "@type": "ImageObject",
            "name": "logo Cipta Esensi Merenah",
            "url": "https://cdn.cenah.co.id/_nuxt/img/logo-wide.5420183.png",
            "width": "256px",
            "height": "62px"
          }
        },
        "description": this.description
      }
    ];
  }
}
</script>
