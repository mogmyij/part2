const UList = ({ array, keyArray }) => {
  return (
    <ul>
      {array.map((value,index) => (
        <li key={keyArray[index]}>{value}</li>
      ))}
    </ul>
  );
};

export default UList;
