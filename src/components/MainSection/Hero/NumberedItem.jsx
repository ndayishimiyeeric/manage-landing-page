function NumberedItem(props) {
  const { data } = props;
  return (
    <li>
      <div className="flow" style={{ '--flow-spacer': '1em' }}>
        <h3 className="fs-600 fw-bold">{data.title}</h3>
        <p data-width="full">{data.body}</p>
      </div>
    </li>
  );
}

export default NumberedItem;
