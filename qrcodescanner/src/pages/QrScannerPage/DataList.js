
const DataList = ({ object }) => {
  return (
    <ul>
      <li>First Name: {object.firstName}</li>
      <li>Last Name: {object.lastName}</li>
      <li>Order Id: {object.orderId}</li>
    </ul>
  );
}

export default DataList;