import Heading from '../components/Heading';
import CodeBlock from '../components/CodeBlock';
import Comment from '../components/Comment';

function Sql() {
  return (
    <>
      <Heading title="sql" />
      <div className="flex flex-col items-start justify-start gap-10">
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="INSERT INTO table (colA, colB, colN) VALUES ( 'Value for colA', 'value for colB', 'value for colN' );" />
          <Comment comment="The CREATE functionality basic structure." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="SELECT col FROM table;" />
          <Comment comment="The READ functionality basic structure." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="UPDATE table SET colName = newValue WHERE colId = idFromRowToUpdate;" />
          <Comment comment="The UPDATE functionality basic structure." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="DELETE FROM table WHERE colId = idFromRowToDelete;" />
          <Comment comment="The DELETE functionality basic structure." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="CREATE DATABASE databaseName;" />
          <Comment comment="Create a database." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="USE databaseName;" />
          <Comment comment="Use a database." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="SHOW TABLES;" />
          <Comment comment="Show database's tables." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="CREATE TABLE tableName ( colA TYPE ( EXTENSION ) PROPS..., colN TYPE ( EXTENSION ) PROPS..., PRIMARY KEY ( colName ) );" />
          <Comment comment="Basic structure to create a table." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="ALTER TABLE tableName ADD newColName TYPE ( EXTENSION ) PROPS...;" />
          <Comment comment="Adds a new column to a table." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="ALTER TABLE tableName DROP COLUMN colName;" />
          <Comment comment="Removes a column from a table." />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <CodeBlock content="DROP TABLE tableName;" />
          <Comment comment="Removes a table." />
        </div>
      </div>
    </>
  );
}

export default Sql;
