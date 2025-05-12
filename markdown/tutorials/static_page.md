<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->
# Create Static Page in Seme Framework

  > Note: This tutorial assumes you’ve downloaded and installed the Seme Framework in your development environment with correct configuration.

## Prepare your environment

Development environment is the first step before we can run Seme Framework on your computer. Depends on what operating system (OS) that you have like Windows, Mac, or Linux this will have different action that we need to do. But, on this tutorial guide I will assume using Windows as operating system. Then, you need to download install XAMPP, you can skip this part if you already have XAMPP installed. After that, we need Git to be installed on your computer to download Seme Framework, you can skip this if you already have. Also you need text editor like VSCode. After all of that, we can proceed to next step.

### Run the XAMPP

We use XAMPP because it was available to Windows, Linux, and then Mac as a software bundle that we can download and install manually and its free. After we download the XAMPP, then we installed it then the new menu will be shown in Start Menu called XAMPP Control Panel on start menu (Windows) or from launchpad (Linux / Mac). Click on start button for Apache and MySQL.

### Download The Seme Framework

After git and XAMPP was installed, now we can download the Seme Framework through powershell. Please open powershell (Windows) or we , then type:

```shell
C: #can be skipped on non Windows operating system

cd \xampp\htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework
```

Now, the Seme Framework was installed inside htdocs folder called seme_framework.

### Check The Seme Framework is Run or Not

Open browser like Google Chrome or Firefox, and then fill the address bar with http://localhost/seme_framework. It should be show a line of text like this: "Thank you for using Seme Framework".


## Create a Controller for Static Page

After we finished setup the Seme Framework, now we are ready to do some code by creating new controller to handle static page. A controller is simply a class that helps delegate work. It is the glue of your web application.

For example, when a call is made to:
```
http://example.com/blog/detail/10
```

We might imagine that there is a controller named "blog". The method being called on blog would be "detail". The blog method’s job could be to get the blog with article id 10, and render them on the page. Very often in MVC, you’ll see URL patterns that match:

```
http://example.com/[controller-class]/[controller-method]/[arguments]
```

As URL schemes become more complex, this may change. But for now, this is all we will need to know.

Create a file at `app/controller/blog.php` with the following code.

```php
<?php
class Blog extends \SENE_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->setTheme('front');
    }
    public function index()
    {
        $data = array();
        $this->setTitle("List of Blog Articles");
        $this->putThemeContent("blog/home", $data);
        $this->loadLayout('single_column', $data);
        $this->render();
    }
    public function detail($id="")
    {
        $data = array();
        $data['id'] = (int) $id;
        $this->setTitle("A Blog Detail with specified ID");
        $this->putThemeContent("blog/detail", $data);
        $this->loadLayout('single_column', $data);
        $this->render();
    }
}
```

You have created a class named Blog, with a index method and detail method that accepts one argument named $id. The Blog class is extending the SENE_Controller class. This means that the new pages class can access the methods and variables defined in the SENE_Controller class (kero/sine/SENE_Controller.php).

The controller is what will become the center of every request to your web application. In very technical Seme Framework discussions, it may be referred to as the super object. Like any php class, you refer to it within your controllers as $this. Referring to $this is how you will load model, views, library and generally command the Seme Framework.

Now you’ve created your first controller contains 2 method, it’s time to make some basic page template. 

## Web Page Template for View Component

We will be creating a web page template called "front". To make the page template is working in Seme Framework, we need to create several files.

Create the a file to load all required css files at app/view/front/theme.json and add the following code:

```javascript
{
    "link":
    [
      {"rel": "stylesheet", "href": "https://skin-cenah.b-cdn.net/css/bootstrap.min.css"},
      {"rel": "stylesheet", "href": "https://skin-cenah.b-cdn.net/css/plugins.css"},
      {"rel": "stylesheet", "href": "https://skin-cenah.b-cdn.net/css/main.css"},
      {"rel": "stylesheet", "href": "https://skin-cenah.b-cdn.net/css/themes.css"},
      {"rel": "stylesheet", "href": "https://skin-cenah.b-cdn.net/css/themes/erplite.css"}
    ]
}
```

Then, we create create a file to load all required javascript files at app/view/front/script.json and add the following code:

```javascript
{
    "script":
    [
      {"src": "https://skin-cenah.b-cdn.net/js/vendor/jquery.min.js"},
      {"src": "https://skin-cenah.b-cdn.net/js/vendor/bootstrap.min.js"},
      {"src": "https://skin-cenah.b-cdn.net/js/plugins.js"},
      {"src": "https://skin-cenah.b-cdn.net/js/app.js"}
    ]
}
```

After we load all javascript and css files, now we need to create a layout file at app/view/front/page/single_column.php and add the following code:
```php
<!DOCTYPE html>
<html class="no-js" lang="en">
	<?php $this->getThemeElement("page/html/head",$__forward); ?>
	<body>
		<div id="page-wrapper" class="page-loading">
			<div class="preloader themed-background">
				<h1 class="push-top-bottom text-light text-center" >
                    <strong>Seme Framework</strong>
                    <br>
                    <small>Loading...</small>
                </h1>
				<div class="inner">
					<h3 class="text-light visible-lt-ie10"><strong>Loading..</strong></h3>
					<div class="preloader-spinner hidden-lt-ie10"></div>
				</div>
			</div>
			
            <div id="page-container" class="sidebar-mini sidebar-visible-lg-mini">
				<div id="main-container">
					<?php $this->getThemeContent(); ?>
					<?php $this->getThemeElement("page/html/footer",$__forward); ?>
				</div>
			</div>
		</div>
		<div id="modal-preloader" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog slideInDown animated">
				<div class="modal-content" style="background-color: #000;color: #fff;">
					<div class="modal-header text-center" style="border: none;">
						<h2 class="modal-title"><i class="fa fa-spin fa-refresh"></i> Loading...</h2>
					</div>
				</div>
			</div>
		</div>
		<?php $this->getJsFooter(); ?>
		<script>
			$(document).ready(function(e){
				<?php $this->getJsReady(); ?>
			});
			<?php $this->getJsContent(); ?>
		</script>
	</body>
</html>
```

Now, we are ready to add another html template at app/view/front/page/html/head.php and add the following code:
```php
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title><?=$this->getTitle()?></title>
    <meta name="description" content="<?=$this->getDescription()?>">
    <meta name="keyword" content="<?=$this->getKeyword()?>"/>
    <meta name="author" content="<?=$this->getAuthor()?>">
    <meta name="robots" content="<?=$this->getRobots()?>" />
    <link rel="shortcut icon" href="<?=$this->getIcon()?>" />
    <?php $this->getAdditionalBefore()?>
    <?php $this->getAdditional()?>
    <?php $this->getAdditionalAfter()?>
    <script src="<?=$this->cdn_url("skin/admin/")?>js/vendor/modernizr.min.js"></script>
</head>	
```

The head.php file will wrap all html codes under <head></head> tag. This file will be also loaded in single_column.php layout using this code `<?php $this->getThemeElement("page/html/head",$__forward); ?>`. Then, the other file that we will create at app/view/front/page/footer.php and add the following code:

```php
<footer class="clearfix">
	<div class="pull-right">
		Made with <i class="fa fa-heart text-danger"></i> by <a href="https://cenah.co.id" target="_blank">cenah.co.id</a>. 
	</div>
	<div class="pull-left">
		Seme Framework - version 4 &copy; <?=date("Y")?>
	</div>
</footer>
```


### Static page example for Blog controller

Earlier you set up a controller for blog with 2 methods inside of that. Now, we are going to create a view for the blog main page first at app/view/front/blog/home.php and add the following code:

```
<div id="page-content">
	<div class="content-header">
		<div class="header-section">
			<h1>
				<i class="gi gi-show_big_thumbnails"></i> Static Content Example
                <br>
                <small>This is the default content in app/view/front/blog/home.php</small>
			</h1>
		</div>
	</div>
	<ul class="breadcrumb breadcrumb-top">
		<li><a href="<?=base_url()?>">Home</a></li>
		<li><a href="#">Blog</a></li>
	</ul>
	<div class="block full block-alt-noborder">
		<h3 class="sub-header text-center">
            <strong>Static Content Example</strong> for layout demostration
        </h3>
		<div class="row">
			<div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
				<article>
					<h1><a href="<?=base_url('blog/detail/')?>">First Article</a></h1>
                    <p>First article description>
				</article>
                <article>
					<h1><a href="<?=base_url('blog/detail/')?>">Second Article</a></h1>
                    <p>Second article description>
				</article>
			</div>
		</div>
	</div>
</div>
```

Then we will create another file at app/view/front/blog/detail.php and add the following code:
```
<div id="page-content">
	<div class="content-header">
		<div class="header-section">
			<h1>
				<i class="gi gi-show_big_thumbnails"></i> Static Content Example
                <br>
                <small>This is the default content in app/view/front/blog/detail.php</small>
			</h1>
		</div>
	</div>
	<ul class="breadcrumb breadcrumb-top">
		<li><a href="<?=base_url()?>">Home</a></li>
		<li><a href="<?=base_url('blog')?>">Blog</a></li>
		<li><a href="#">Detail</a></li>
	</ul>
	<div class="block full block-alt-noborder">
		<h3 class="sub-header text-center">
            <strong>Static Content Example</strong> for layout demostration
        </h3>
		<div class="row">
			<div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
				<article>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.</p>
				</article>
			</div>
		</div>
	</div>
</div>
```

## Trying our Code

Assuming the Seme Framework was running using XAMPP and installed at c:\xampp\htdocs\seme_framework. So, your URL will be http://localhost/seme_framework. Now, Try to open http://localhost/seme_framework/blog in the web browser. If you see the web page like what we create before, then you have completely finished this tutorial.

### Troubleshooting

Question: I see not found page, what should I do?
Answer: Please check you base_url configuration at app/config/development.php. Make sure, the base url are exactly same with the installed directory and the development environment. For example, on this case we using XAMPP as development environment then Seme Framework is installed at c:\xampp\htdocs\seme_framework. So, the base_url should be `http://localhost/seme_framework`.