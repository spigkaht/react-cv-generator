import '../../OutputPanel.css';

function OutputPerson({ data }) {
  const nameSep = data.name && data.phone ? "*" : "";
  const phoneSep = data.phone && data.email ? "*" : "";

  return (
    <>
      <h3>Contact Information</h3>
      <div className="output-person">
        <p>{data.name}</p>
        <p>{nameSep}</p>
        <p>{data.phone}</p>
        <p>{phoneSep}</p>
        <p>{data.email}</p>
      </div>
    </>
  );
}

export default OutputPerson;
