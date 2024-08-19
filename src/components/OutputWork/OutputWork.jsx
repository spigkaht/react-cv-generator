import '../../OutputPanel.css';

function OutputWork({ data }) {
  const jobs = data.map(job =>
    <li key={job.id}>
      <h4>Employer: {job.employer}</h4>
      <p>Dates: {job.dates}</p>
      <p>Description: {job.desc}</p>
      <p>Details: {job.details}</p>
    </li>
  );

  return (
    <>
      <h3>Work Experience</h3>
      <ul>{jobs}</ul>
    </>
  )
}

export default OutputWork;
