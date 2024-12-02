<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->
# Project Name: Seme Framework

## Table of Contents
1. [Overview](#overview)
2. [Environment Setup](#environment-setup)
3. [Installation Guide](#installation-guide)
4. [Code Documentation](#code-documentation)
5. [API Documentation](#api-documentation)
6. [User Manual](#user-manual)
7. [Database Documentation](#database-documentation)
8. [Troubleshooting and FAQs](#troubleshooting-and-faqs)
9. [Change Log](#change-log)
10. [Best Practices and Coding Standards](#best-practices-and-coding-standards)

## Overview
### Purpose
Seme Framework is a PHP-based framework designed for building small to medium-scale web applications efficiently without starting from scratch. This lightweight framework maintains optimal performance from development through to production. It embraces traditional coding approaches, making it accessible for both beginner and experienced programmers.

As a Web Application Framework, Seme Framework bridges the gap between Web Browsers and Database Systems by providing ready-to-use functions and methods for creating web-based applications. It simplifies database operations through built-in SQL query builders while maintaining direct SQL compatibility. This allows developers to focus on implementing their business logic and delivering solutions through the web browser, rather than dealing with basic infrastructure setup.

#### Key Features
Why choose Seme Framework:

##### 1. PHP-Based Development
- Built with PHP, offering familiar syntax and compatibility with C-family languages
- No explicit data type declarations required
##### 2. Lightweight Architecture
- Minimalist core structure with optimized abstract classes
- Performance-tested using CacheGrind and XDEBUG extensions
##### 3. MVC Architecture
- Implements Model-View-Controller pattern
- Promotes organized and maintainable code structure
##### 4. Automatic Routing
- URL-based routing system
- Quick page generation through direct route mapping
##### 5. Theming System
- Supports reusable display themes
- Efficient view component management
##### 6. Database Query Builder
- Built-in SQL query builder
- Secure and simplified database interactions
##### 7. Extensibility
- Seamless integration with PHP modules and libraries
- Flexible architecture for adding functionality
##### 8 .Documentation & Support
- Comprehensive tutorials and documentation
- Beginner-friendly learning resources

### Architecture

#### Model View Controller (MVC) Architecture
Seme Framework implements the Model-View-Controller (MVC) architectural pattern, which separates application logic into distinct components based on their specific functions. The code structure in Seme Framework is organized using classes, properties, and methods, following Object-Oriented Programming principles.

   > Note: While this implementation may not strictly adhere to all formal Object-Oriented Programming theories, it provides a practical approach to using Seme Framework's class and object concepts.

This MVC separation provides several advantages:

- Clearer code organization
- Simplified application development
- Easier maintenance
- Better process flow management
- Enhanced code reusability
- Clear separation of database operations and business logic
- Flexible response handling (HTML or JSON)
- The MVC architecture in Seme Framework ensures that applications remain maintainable and scalable while keeping the codebase organized and efficient.

##### Model
The Model component is implemented as a class that specifically handles database communications. It manages:

- Data retrieval
- Data storage
- Data deletion
- Database interactions
- Table-specific operations
Each Model class typically corresponds to a specific database table or related group of tables.

##### View
The View component is responsible for presentation logic, typically containing:

- HTML markup
- JavaScript code
- CSS styling
- Minimal PHP code (primarily for data output)

Views are template files that are loaded and rendered by Controllers.

##### Controller
The Controller component is responsible for handling user requests, typically containing:

- Contains the main application logic
- Instantiates and manages Model classes
- Loads and renders View files
- Processes HTTP requests
- Generates appropriate responses (HTML pages or JSON output)
- Handles data flow between Models and Views

#### How Seme Framework Works

1. HTTP request reaches a Controller
2. Controller loads necessary Model classes
3. Controller processes business logic
4. Controller fetches data through Model classes
5. Controller loads appropriate View files
6. Controller renders the final response (webpage or JSON)

## Installation Guide
### Requirements
Seme Framework compatible with the following requirements:
- PHP version 7.4 or higher (except 8.0)
- MySQL database (version 5.6 or higher)
- Web server with URL rewriting support (Apache, Nginx, IIS)

### Download Seme Framework
There are two methods to download Seme Framework:

#### Method 1: ZIP File
1. Visit [Seme Framework GitHub](https://github.com/drosanda/seme-framework)
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the downloaded file (seme-framework-master.zip) to your web server directory:
   - Windows: D:\xampp\htdocs\seme_framework
   - Mac: /Applications/XAMPP/htdocs/seme_framework
   - Linux: /opt/lampp/htdocs/seme_framework

#### Method 2: ZIP File
Open your terminal/command prompt and navigate to your web server directory:
```shell
# For Windows
D:
cd /xampp/htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework

# For Mac
cd /Applications/XAMPP/htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework

# For Linux
cd /opt/lampp/htdocs
git clone git@github.com:drosanda/seme-framework.git seme_framework
```
