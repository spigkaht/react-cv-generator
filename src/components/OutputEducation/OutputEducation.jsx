import '../../OutputPanel.css';

function OutputEducation({ data }) {
  return (
    <>
      <h3>Education & Certifications</h3>
      <p>{data.provider}</p>
      <p>{data.completed}</p>
      <p>{data.course}</p>
    </>
  )
}

export default OutputEducation;
