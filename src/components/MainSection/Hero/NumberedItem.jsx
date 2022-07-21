function NumberedItem(props) {
  const { data } = props;
  return (
    <li>
      <h3 className="fs-600 fw-bold">{data.title}</h3>
      <p>{data.body}</p>
    </li>
  );
}

export default NumberedItem;
