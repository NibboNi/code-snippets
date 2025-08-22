interface HeadingProps {
  title: string;
}

function Heading({ title }: HeadingProps) {
  return <h2 className="mb-10 font-light text-4xl uppercase">{title}</h2>;
}

export default Heading;
