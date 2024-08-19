import '../../InputPanel.css';
import { useState } from 'react';

function InputWork({ setWorkData }) {
  const [localData, setLocalData] = useState({
    employer: "",
    dates: "",
    desc: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    setWorkData(localData);
  };

  return (
    <>
      <h3>Work Experience</h3>
      <label>
        Employer:
        <input type="text" name="employer" value={localData.employer} onChange={handleChange} />
      </label>
      <label>
        Dates:
        <input type="text" name="dates" value={localData.dates} onChange={handleChange} />
      </label>
      <label>
        Job Desc:
        <input type="text" name="desc" value={localData.desc} onChange={handleChange} />
      </label>
      <label>
        Job Details:
        <textarea rows="6" name="details" value={localData.details} onChange={handleChange} />
      </label>
      <button className="input-btn" onClick={handleUpdate}>Update</button>
    </>
  )
}

export default InputWork;
