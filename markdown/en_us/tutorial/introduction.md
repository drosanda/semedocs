<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->

[Seme Framework](../../) > [en](../index.md) > [tutorial](index.md) > [introduction](#)

# Introduction
Before starting the tutorial, you have to do which is described on the requirements first. The goals for this tutorial is, how to interacted with View and Controller. Model interaction will be explored at next tutorial. Ok, lets get started!

# Hello World!
Hello World is often used to illustrate the basic syntax of a programming language. But on Seme Framework, Hello World used to checked the basic MVC purpose.

## Configuration adjustment
We assumed that you put Seme Framework which is described In the Download & Install  page. After that, start the XAMPP and open http://localhost/seme_framework.

## Controller
On Seme Framework, the default controller named home.php with its class name name Home too. First, open files located at `app/controller/home.php`. If the file doesnt exists, create one.

```php
<?php
class Home extends \SENE_Controller
{
  public function __construct()
  {
    parent::__construct();
  }
  public function index()
  {
    echo 'Hello World!';
  }
}
```

And then open http://localhost/seme_framework, it should show Hello World!.