# mongoose

SQL (Structured Query Language) databases are relational and store data in tables with rows and columns. Each table has a fixed schema that defines the structure and data types. SQL databases use relationships (foreign keys) to connect data across multiple tables. Examples: MySQL, PostgreSQL, Oracle. SQL is best suited when data consistency and complex queries are required, like in banking systems where transactions must be accurate and ACID-compliant.

NoSQL databases are non-relational and store data in flexible formats such as documents, key-value pairs, wide-columns, or graphs. They do not require a fixed schema, allowing changes without altering existing data. MongoDB, for example, stores data as documents in BSON/JSON format.

In MongoDB:

Schema: A blueprint of how data should be structured (fields, types, etc.).

Document: A single record in MongoDB (similar to a row in SQL). Example:

{ "name": "Alice", "age": 25 }


Collection: A group of documents (similar to a table in SQL).

When to use SQL: Financial systems where data integrity and joins are critical.
When to use NoSQL: Social media apps where data is unstructured and needs horizontal scaling.