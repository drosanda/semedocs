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

#### putThemeContent()
The putThemeContent() method injects view content into a layout within the current theme. It supports nested view component loading and variable passing.

##### Syntax
```php
protected function putThemeContent(string $view_file_path = '', array $forwarded_data = []): mixed
```

##### Parameters
- `$view_file_path`	Relative theme location filename without .php extension.
- `$forwarded_data` Associative array of data to pass to the view. This parameter was optional.

##### Return Value
- Returns 0 on successful view injection
- Returns instance of current class ($this) on failure
- Triggers E_USER_ERROR if view file cannot be loaded

##### Behavior
- Constructs full view path using theme directory
- Checks if view file exists
- Creates temporary session storage for passed variables
- Extracts variables into current scope
- Buffers view content using output buffering
- Appends buffered content to theme content
- Cleans up temporary session data

##### Error Handling
The method will trigger a user error if:

- The specified view file does not exist
- The full path cannot be constructed

##### Examples

###### Example 1: Basic Usage, Directory Structure, and html view example code
```php
class Home extends \SENE_Controller {
    public function __construct() {
        parent::__construct();
        $this->setTheme('front');
    }

    public function index() {
        $data = [
            'title' => 'Welcome'
        ];
        $this->putThemeContent("home/home", $data);  // this method will be loaded views under app/view/front/home/bottom.php
        $this->putJsContent("home/home_bottom", $data);
        $this->loadLayout('single_column_layout', $data);
        $this->render();
    }
}
```

directory structure

```
app/
└── view/
    └── front/
        └── home/
            └── home.php
```

Example of app/view/front/home/home.php file content
```
<header>
    <h1><?= $title ?></h1>
</header>
```


##### Notes
- View files must have .php extension
- View paths are relative to the theme directory
- Variables passed in $forwarded_data array become available in view scope
- Content is buffered and not immediately output
- Must call render method to display collected content