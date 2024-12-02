<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->

# Load Method
The load method is used to call a model file or a library file while in the Controller context. This method also allows to instantiate the called file into an object. By default, the name of the instantiated object will be the same as the file name in lowercase. You can also replace the object name with the desired name or give it an alias.

## Basic Usage
Here is the basic usage load method from SENE_Controller  class.
```php
$this->load(string $filename_location[, string $alias=''[, string $load_type='model']]):self
```

### Parameters
This method has 1 required parameter and 2 optional parameters.

#### $filename_location
The $model_filename value can be contain a string of model filename. File location always relatives to app/model directory. So, if we have a model class under app/model/api/hello_model.php We have to fill the first parameter with extra suffix path, like api/hello_model.

#### $alias
The alias name of the object that has been called into the controller. If given an empty string, it will use the file name without the .php suffix as the object name.

#### $load_type
The type of call from the file to be called is "model", "lib" or "". If the string is empty, it will call the library but without instantiating it into an object.

## Example

Here are some examples how to implement SEME_Controller::load method.

### Without Using Alias
On this example, will show the implementation of load method without an alias.

```php
<?php
class Blog extends \SENE_Controller {
  public function __construct(){
    parent::__construct();
    $this->load('hello_model');
  }
  public function index(){
    //executing the hello_model object
    print_r($this->hello_model->get());
    die();
  }
}
```

### Using Alias
On this example, will show the implementation of load method using alias.

```php
<?php
class Blog extends \SENE_Controller {
  public function __construct(){
    parent::__construct();
    $this->load('api/hello_model','hm');
  }
  public function index(){
    //executing the hello_model object
    print_r($this->hm->get());
    die();
  }
}
```

## Tips

If you confused how to fill the alias name, you can get from first letter of each class name.
example, `app/model/api/hello_detail_model2.php`` and then the alias will be `hdm2`.

### Inside a Directory
On this example, will show the implementation of load method loading a model inside a directory and without an alias.

```php
<?php
class Blog extends \SENE_Controller {
  public function __construct(){
    parent::__construct();
    $this->load('api/hello_model');
  }
  public function index(){
    //executing the hello_model object
    print_r($this->hello_model->get());
    die();
  }
}

```

## Caution

While loading the model from sub directory, the path prefix will not instantiate as object model name.
So, be careful for choosing the naming class model or alias.
If necessary, you can duplicate a model class to avoid conflict with extra suffix with number.
example, `app/model/api/hello_model2.php`` and then the class name `Hello_Model2``.