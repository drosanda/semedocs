<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->

# URI Routing in Seme Framework 4

## Basic Concept
URI Routing creates relationships between URL patterns and controller functions. While typically URLs follow a pattern like `example.com/class/method/id`, Seme Framework allows custom routing for more flexible URL structures.

## Route Configuration
Routes are defined in configuration files under `app/config/` and can be applied to:
- Production environment
- Staging environment 
- Development environment

## Wildcard Types
Two types of wildcards are available:
- `(:num)` - Matches numeric segments only
- `(:any)` - Matches any character in a segment

## Route Definition Examples

### Basic Redirects
```php
$routes['produk'] = "products";
```
This redirects `/produk` to the products controller

### Static Routes with Parameters
```php
$routes['produk/ojan'] = "products/detail/15";
```
This maps `/produk/ojan` to the detail method of products controller with ID 15

### Dynamic Routes
```php
$routes['product/(:any)'] = "catalog/product_lookup";
```
Maps any URL like `/product/something` to the product_lookup method

### Numbered Parameters
```php
$routes['product/(:num)'] = "catalog/product_lookup_by_id/$1";
```
Maps URLs like `/product/123` to product_lookup_by_id method, passing 123 as parameter

## Reserved Routes

### Home Route
```php
$routes['home'] = 'home';
```
Handles requests to the root URL (/)

### 404 Route
```php
$routes['notfound'] = 'notfound';
```
Handles requests to non-existent pages

## Important Rules
1. Routes run in order of definition - higher routes take precedence
2. Don't use leading/trailing slashes in route definitions
3. Reserved routes must be defined before wildcard routes
4. Admin routing requires separate configuration

## URL Pattern Examples
```
example.com/product/1/
example.com/product/2/
example.com/product/3/
example.com/product/4/
```
These URLs can be mapped to specific controller methods using the routing system.

## Best Practices
1. Always define a default route to avoid 404 errors
2. Structure routes from most specific to most general
3. Use appropriate wildcards based on expected input
4. Consider URL readability when designing routes