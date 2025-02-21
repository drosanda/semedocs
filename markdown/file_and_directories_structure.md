<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->
# Seme Framework

Like other frameworks, the Seme Framework provides a structured file and directory layout to facilitate web application development without starting from scratch.
On this page, we will describe files and directories that exists on Seme Framework.

## Directory Structure

The Seme Framework follows a structured organization of files and directories. Below is the complete directory layout with explanations of each component:
```
seme-framework/
├── app/                    # Application directory
│   ├── cache/             # Cache storage
│   ├── config/            # Configuration files
│   │   └── development.php
│   ├── controller/        # Controller files
│   │   ├── home.php      # Default home controller
│   │   └── notfound.php  # 404 handler
│   ├── core/             # Core application files
│   ├── model/            # Model files
│   └── view/             # View files
├── kero/                  # Framework core directory
│   ├── bin/              # Command line tools
│   │   ├── docs.sh       # Documentation generator
│   │   ├── scan.sh       # Code scanner
│   │   └── test.sh       # Testing utility
│   ├── lib/              # Library files
│   │   ├── conumtext.php
│   │   ├── seme_dateindo.php
│   │   ├── seme_email.php
│   │   ├── seme_fpdf.php
│   │   ├── seme_log.php
│   │   ├── seme_page_fpdf.php
│   │   ├── seme_purifier.php
│   │   └── sene_json_engine.php
│   ├── sine/             # Core framework components
│   │   ├── SENE_Controller.php
│   │   ├── SENE_Engine.php
│   │   ├── SENE_Input.php
│   │   ├── SENE_Model.php
│   │   ├── SENE_MySQLi_Engine.php
│   │   └── SENE_Runner.php
│   └── Functions.php      # Global helper functions
└── index.php             # Application entry point

```

### Key Directories
#### /app
Contains your application-specific code including controllers, models, views, and configuration files.

#### /app/controller
All you controller files that need for you web application will be put under this directory.

#### /app/model
All you model files that will contain table operation like query builder or raw sql will belong to this. One table are representative into one model file.

#### /app/view
All you view files that contains html template, html layout, javascript, and another view component.

#### /kero
Houses the framework's core functionality, libraries, and utilities.

#### /kero/sine
Contains the main framework components that handle MVC operations, database connections, and request processing.

#### /kero/lib
Provides additional libraries and utilities for common tasks like date handling, email, PDF generation, and more.