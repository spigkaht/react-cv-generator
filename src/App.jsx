import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import InputPerson from './components/InputPerson/InputPerson';
import InputWork from './components/InputWork/InputWork';
import InputEducation from './components/InputEducation/InputEducation';
import OutputPerson from './components/OutputPerson/OutputPerson';
import OutputWork from './components/OutputWork/OutputWork';
import OutputEducation from './components/OutputEducation/OutputEducation';

function App() {
  const initialPerson = {
    name: "",
    phone: "",
    email: ""
  };

  const initialWork = [
    {
      id: uuidv4(),
      employer: "Better Rentals",
      dates: "05/20 - 04/23",
      desc: "Hire Controller",
      details: "Served customers, cleaned, etc"
    }
  ];

  const initialEducation = {
    provider: "",
    completed: "",
    course: ""
  };

  const [personData, setPersonData] = useState(initialPerson);
  const [isEditing, setIsEditing] = useState(true); // Initially true to show input fields
  const [workData, setWorkData] = useState(initialWork);
  const [educationData, setEducationData] = useState(initialEducation);

  const handleSave = (updatedData) => {
    setPersonData(updatedData);
    setIsEditing(false); // Switch to display mode after saving
  };

  const handleEdit = () => {
    setIsEditing(true); // Switch back to edit mode
  };

  return (
    <div className="main">
      <div className="input-main">
        <div className="input-div input-person">
          <InputPerson
            data={personData}
            setPersonData={handleSave}
            isEditing={isEditing}
            onEdit={handleEdit}
          />
        </div>
        <div className="input-div input-work">
          <InputWork setWorkData={setWorkData} />
        </div>
        <div className="input-div input-education">
          <InputEducation setEducationData={setEducationData} />
        </div>
      </div>
      <div className="output-main">
        <OutputPerson data={personData} />
        <OutputWork data={workData} />
        <OutputEducation data={educationData} />
      </div>
    </div>
  );
}

export default App;
