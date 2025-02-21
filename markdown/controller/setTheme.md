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

#### setTheme()
The setTheme method purpose is for set a theme view for current controller. As you can see, the directory of Seme Framework MVC structure like this:

```
seme-framework/
└─ app/                    # Application directory
    └── view/              # View files
      └── theme_name/      # theme directory
        └── home/          # index or home directory for homepage
```

With this method, will facilitate a controller with multiple template view.

##### Syntax
```php
$this->setTheme(string $theme_name): $this
```

##### Parameters
- `$theme_name` (string, required): The name of theme. The theme name value that will be passed as parameter into this method will represent a directory under `app/view/`.

##### Return Value
Returns the current controller class object.

##### Examples

###### Example 1: Basic Usage
```php
class Home extends \SENE_Controller {
    public function __construct() {
        parent::__construct();
        $this->setTheme('blackfriday2025'); // this controller will be loaded all views under app/view/blackfriday2025
    }

    public function index() {
        $data = array();
        $this->putThemeContent("home/home", $data);
        $this->putJsContent("home/home_bottom", $data);
        $this->loadLayout('single_column_layout', $data);
        $this->render();
    }
}
```
