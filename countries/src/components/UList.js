const UList = ({ array }) => {
  return (
    <ul>
      {array.map((value) => 
        <li key={value}>{value}</li>
      )}
    </ul>
  );
};

export default UList;
