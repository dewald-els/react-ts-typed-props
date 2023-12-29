type WithNumberProps = {
  value: number;
};
const WithNumber: React.FC<WithNumberProps> = (props) => {
  const { value } = props;
  return <p>This is the number value: {value}</p>;
};

export default WithNumber;
