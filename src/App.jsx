 import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

const App = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    jobTitle: "",
    description: "",
    graduation: "",
    startDate: "",
    endDate: "",
    city: "",
    school: "",
  });

  const [education, setEducation] = useState([
    { id: 1, school: "", city: "",graduation:"", startDate: "", endDate: "" },
  ]);
  const [experience, setExperience] = useState([
    { id: 1, company: "", jobTitle: "", description: "", startDate: "", endDate: "" },
  ]);

  return (
    <div className="flex flex-col md:flex-row p-6 gap-8">
      <Form
        resumeData={resumeData}
        setResumeData={setResumeData}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
      />
      <Preview resumeData={resumeData} education={education} experience={experience} />
    </div>
  );
};

export default App;