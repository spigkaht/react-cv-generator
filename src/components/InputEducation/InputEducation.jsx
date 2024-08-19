import '../../InputPanel.css';
import { useState } from 'react';

function InputEducation({ setEducationData }) {
  const [localData, setLocalData] = useState({
    provider: "",
    completed: "",
    course: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    setEducationData(localData);
  };

  return (
    <>
      <h3>Education & Certifications</h3>
      <label>
        Provider:
        <input type="text" name="provider" value={localData.provider} onChange={handleChange} />
      </label>
      <label>
        Completed:
        <input type="text" name="completed" value={localData.completed} onChange={handleChange} />
      </label>
      <label>
        Course:
        <input type="text" name="course" value={localData.course} onChange={handleChange} />
      </label>
      <button className="input-btn" onClick={handleUpdate}>Update</button>
    </>
  )
}

export default InputEducation;
