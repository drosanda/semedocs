<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2025-02-21
Last Updated: 2025-02-21
-->
# Seme Framework
## Controller
### Methods

#### render()
The render method is responsible for outputting the final content that has been buffered through various methods like putThemeContent(), putJsContent(), and loadLayout(). It can optionally cache the output for improved performance.

##### Syntax
```php
$this->render(integer $cache_duration=0): void
```

##### Parameters
- `$cache_duration`	Cache duration in minutes. Set 0 to disable caching.

##### Return Value
Returns empty (void).

##### Examples

###### Example 1: Basic Usage
```php
class Home extends \SENE_Controller {
    public function __construct() {
        parent::__construct();
        $this->setTheme('front');
    }

    public function index() {
        $data = array();
        $this->putThemeContent("home/home", $data);
        $this->putJsContent("home/home_bottom", $data);
        $this->loadLayout('single_column_layout', $data);
        $this->render(); //this will render all loaded html view files
    }
}
```

##### Notes
- Must be called after all content buffering methods
- Cache files are stored in the SENECACHE directory
- Uses exclusive file locking for cache writes
- Should be the last method called in controller actions
- One method of controller should be one render method is called. Otherwise will be raised error. The most common error caused by this method is "Headers already sent".