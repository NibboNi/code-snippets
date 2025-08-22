import CodeBlock from '../components/CodeBlock';
import Heading from '../components/Heading';

function Sql() {
  return (
    <>
      <Heading title="sql" />
      <div className="flex flex-col items-start justify-start gap-5">
        <CodeBlock content="INSERT INTO table (colA, colB, colN) VALUES ( 'Value for colA', 'value for colB', 'value for colN' );" />
        <CodeBlock content="SELECT col FROM table;" />
      </div>
    </>
  );
}

export default Sql;
