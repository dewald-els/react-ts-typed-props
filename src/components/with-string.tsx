type WithStringProps = {
  value: string;
};
const WithString: React.FC<WithStringProps> = (props) => {
  const { value } = props;
  return <p>This is the string value: {value}</p>;
};

export default WithString;
