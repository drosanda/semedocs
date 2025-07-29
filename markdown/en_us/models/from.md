<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->

[Seme Framework](../../index.md) > [en](../index.md) > [model](index.md) > from

# from()
The from method is used to specify the table from which data will be selected in a database query. This method is part of SENE_Model class and can be combined with other Query Builder methods to build complex queries.

##### Syntax
```php
$this->db->from(string $table_name[, string $table_alias=""]): $this->db
```

##### Parameters
- `$table_name` (string, required): The name of the database table
- `$table_alias` (string, optional): An alias for the table name, required when using JOIN methods

##### Return Value
Returns the database object instance for method chaining.

##### Examples

###### Example 1: Basic Usage
```php
class Blog_Model extends \SENE_Model {
    var $table = 'blog';
    var $table_alias = 'b';
    
    public function countList() {
        $this->db->from($this->table, $this->table_alias;
        return $this->db->get();
    }
}
```
Generated SQL:
```sql
SELECT * FROM `blog` AS `b`;
```

###### Example 2: Without Alias
```php
public function getAll() {
    $this->db->from('blog');
    return $this->db->get();
}
```
Generated SQL:
```sql
SELECT * FROM `blog`;
```

##### Notes
- Must be used after `select()` method if specific columns are needed
- Table alias is required when using JOIN operations
- Can be chained with other query builder methods
- Usually paired with `get()` or `get_first()` to execute the query

Would you like me to explain any specific aspect of the `from()` method in more detail?