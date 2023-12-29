type WithBoolProps = {
  value: boolean;
};
const WithBool: React.FC<WithBoolProps> = (props) => {
  const { value } = props;
  return <p>This is the bool value: {value}</p>;
};

export default WithBool;
