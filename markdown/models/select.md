<!--
Document Type: Technical Documentation
Purpose: Seme Framework Documentation
Author: Daeng Rosanda 
Date Created: 2024-11-26
Last Updated: 2024-11-26
-->

# Seme Framework
## Model
### Query Builder
#### select()
The select method purpose is to select columns from a table. This method is part of SENE_Model class and can be combined with other Query Builder methods to build complex queries.

##### Syntax
Filters data from query result by executing SELECT SQL command. This method is part of the Query Builder pattern and can be combined with other Query Builder methods.

##### Syntax
```php
$this->db->select(string $column_name="*"): $this->db
```

##### Parameters
- `$column_name` (string, required): The column name to select from the table
  - Can be a single column name
  - Can use `*` wildcard to select all columns

##### Return Value
Returns the database object instance for method chaining.

##### Examples

###### Example 1: Select All Columns using wildcard
```php
class D_Blog_Model extends \SENE_Model {
    var $tbl = 'd_blog';
    var $tbl_as = 'b';
    
    public function getList() {
        $this->db->select("*");
        $this->db->from($this->tbl, $this->tbl_as);
        return $this->db->get();
    }
}
```
Generated SQL:
```sql
SELECT * FROM `d_blog`;
```

###### Example 2: Select Specific Columns
```php
public function getById($id) {
    $this->db->select("id");
    $this->db->select("title");
    $this->db->select("content");
    $this->db->from($this->tbl, $this->tbl_as);
    $this->db->where_as("id", $id);
    return $this->db->get_first();
}
```
Generated SQL:
```sql
SELECT `id`, `title`, `content` FROM `d_order` WHERE `id` = 53;
```

### Notes
- Can be called multiple times to select different columns
- Must be used with `from()` method to specify the table
- Commonly used with other query builder methods like `where()`, `limit()`, etc.
