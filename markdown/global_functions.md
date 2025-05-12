<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->

# Global Variables and Functions

## Functions

### base_url()
Returns the full path URL of your application. Ensure that `$base_url` is properly configured in your configuration settings.

### base_url_admin()
Returns the full path URL for admin secret URL. Make sure `$base_url_admin` is properly configured in your configuration settings.

### Controller::debug()
A debugging function that outputs pre-formatted text for debugging purposes.

### dd()
An alternative debugging function that outputs pre-formatted text, similar to `Controller::debug()`.

## Variables

### $__forward
A global variable used for forwarding variables between views. 

#### Example Usage:
Consider this view structure:
```
app/
└── view/
    └── front/
        ├── page/
        │   └── html/
        │       ├── header.php
        │       ├── navbar.php
        │       └── footer.php
        └── col-1.php
```

To pass variables from header.php to navbar.php, use the `$__forward` variable:

```php
<?php
$this->getThemeElement('page/html/navbar', $__forward);
?>
```
