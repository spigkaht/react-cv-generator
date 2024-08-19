import { useState, useEffect } from 'react';
import '../../InputPanel.css';

function InputPerson({ data, setPersonData, isEditing, onEdit }) {
  const [localData, setLocalData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    if (!isEditing) {
      setLocalData(data); // Load data when not editing (for initial load and editing)
    }
  }, [data, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    setPersonData(localData); // Save and pass data to parent
  };

  return (
    <>
      <h3>Contact Information</h3>
      {isEditing ? (
        <>
          <label>
            Name:
            <input type="text" name="name" value={localData.name} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={localData.phone} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={localData.email} onChange={handleChange} />
          </label>
          <button className="input-btn" onClick={handleSave}>Save</button>
        </>
      ) : (
        <button className="input-btn" onClick={onEdit}>Edit</button>
      )}
    </>
  );
}

export default InputPerson;
