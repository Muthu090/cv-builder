import { useState } from "react";
import validator from "validator"; 
import expandMore from "../assets/expand-more.png";
import expandLess from "../assets/expand-less.png";
 
const Form = ({
  resumeData,
  setResumeData,
  education,
  setEducation,
  experience,
  setExperience,
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [isEducationShown, setIsEducationShown] = useState(true);
  const [isExperienceShown, setIsExperienceShown] = useState(true);
  const [isPersonalShown, setIsPersonalShown] = useState(true);

  // const isFormValid = () => {
  //   return resumeData.fullName && resumeData.email && resumeData.phone && resumeData.address;
  // };

  const handleEmail = (event) => {
    const { name, value } = event.target;
    setResumeData({ ...resumeData, [name]: value });
    setEmail(value);
    if (!validator.isEmail(value)) {
      setMessage("Please, enter a valid email!");
    } else {
      setMessage("");
    }
  };

  const togglePersonal = () => {
    setIsPersonalShown(!isPersonalShown);
  };

  const toggleEducation = () => {
    setIsEducationShown(!isEducationShown);
  };

  const toggleExperience = () => {
    setIsExperienceShown(!isExperienceShown);
  };

  const validatePhone = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
    setPhone(value);
    setMsg(validator.isMobilePhone(value, "any") ? "" : "Please enter a valid number!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleFieldChange = (id, field, value, state, setState) => {
    const updatedState = state.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setState(updatedState);
  };

  const addEducationField = () => {
    setEducation([
      ...education,
      { id: education.length + 1, school: "", city: "", degree: "", startDate: "", endDate: "" },
    ]);
  };

  const addExperienceField = () => {
    setExperience([
      ...experience,
      { id: experience.length + 1, company: "", location:"", jobTitle: "", description: "", startDate: "", endDate: "" },
    ]);
  };

  const deleteField = (id, state, setState) => {
    const updatedState = state.filter((item) => item.id !== id);
    setState(updatedState);
  };

  const clearFields = () => {
    setResumeData({
      fullName: "",
      address: "",
    });
    setEmail("");
    setPhone("");
    setEducation([{ id: 1, school: "", city: "", degree: "", startDate: "", endDate: "" }]);
    setExperience([{ id: 1, company: "", jobTitle: "",location:"", description: "", startDate: "", endDate: "" }]);
  };

  return (
    <div className="w-full md:w-1/2 p-6 rounded-lg shadow-lg">
      <form className="space-y-4">
        <div className="flex flex-row px-10">
          <h1 className="font-bold mb-2 text-xl text-blue-800">Enter Details</h1>
          <img
            onClick={togglePersonal}
            src={isPersonalShown ? expandMore : expandLess}
            className="cursor-pointer h-8 px-10"
          />
        </div>

        {isPersonalShown && (
          <div>
            <input
              type="text"
              name="fullName"
              value={resumeData.fullName || ""}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <span className="text-red-700">{message}</span>

            <input
              type="phone"
              name="phone"
              value={phone}
              onChange={validatePhone}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            <span className="text-red-600">{msg}</span>

            <input
              name="address"
              value={resumeData.address || ""}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 border rounded"
            />
            {/* <div className="bt">
              <button
                disabled={!isFormValid()}
                className="text-white bg-blue-900 px-3 py-1 rounded hover:bg-slate-900"
              >
                Save
              </button>
            </div> */}
          </div>
        )}

        <div className="flex flex-row px-10">
          <h2 className="font-bold mb-2 text-xl text-blue-800">Education</h2>
          <img
            onClick={toggleEducation}
            src={isEducationShown ? expandMore : expandLess}
            className="cursor-pointer h-8 px-10"
          />
        </div>

        {isEducationShown && (
          <div>
            {education.map((item) => (
              <div key={item.id} className="mb-2 flex items-center flex-col">
                <input
                  placeholder="School Name"
                  value={item.school}
                  onChange={(e) =>
                    handleFieldChange(item.id, "school", e.target.value, education, setEducation)
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={item.degree}
                  onChange={(e) =>
                    handleFieldChange(item.id, "degree", e.target.value, education, setEducation)
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  placeholder="City"
                  value={item.city}
                  onChange={(e) =>
                    handleFieldChange(item.id, "city", e.target.value, education, setEducation)
                  }
                  className="w-full p-2 border rounded"
                />
                <div className="flex flex-grow gap-6">
                  <input
                    type="date"
                    placeholder="Start Date"
                    value={item.startDate}
                   
                    onChange={(e) =>
                      handleFieldChange(item.id, "startDate", e.target.value, education, setEducation)
                    }
                    className="w-full p-2 border rounded "
                   
                  />
                 

                  <input
                    type="date"
                    placeholder="End Date"
                    value={item.endDate}
                    onChange={(e) =>
                      handleFieldChange(item.id, "endDate", e.target.value, education, setEducation)
                    }
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => deleteField(item.id, education, setEducation)}
                    className="ml-2 text-white bg-blue-900 px-3 py-1 rounded hover:bg-slate-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addEducationField}
              className="text-white bg-blue-900 px-3 py-1 rounded hover:bg-slate-900"
            >
              + Add Education
            </button>
          </div>
        )}

        <div className="flex flex-row px-10">
          <h2 className="font-bold mb-2 text-xl text-blue-800">Experience</h2>
          <img
            onClick={toggleExperience}
            src={isExperienceShown ? expandMore : expandLess}
            className="cursor-pointer h-8 px-10"
          />
        </div>

        {isExperienceShown && (
          <div>
            {experience.map((item) => (
              <div key={item.id} className="mb-2 flex items-center flex-col">
                <input
                  placeholder="Company Name"
                  value={item.company}
                  onChange={(e) =>
                    handleFieldChange(item.id, "company", e.target.value, experience, setExperience)
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  placeholder="Job position"
                  value={item.jobTitle}
                  onChange={(e) =>
                    handleFieldChange(item.id, "jobTitle", e.target.value, experience, setExperience)
                  }
                  className="w-full p-2 border rounded"
                />
                 <input
                  placeholder="location"
                  value={item.location}
                  onChange={(e) =>
                    handleFieldChange(item.id, "location", e.target.value, experience, setExperience)
                  }
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    handleFieldChange(item.id, "description", e.target.value, experience, setExperience)
                  }
                  className="w-full p-2 border rounded"
                />
                <div className="flex flex-row gap-6">
                  <input
                    type="date"
                    placeholder="Start Date"
                    value={item.startDate}
                    onChange={(e) =>
                      handleFieldChange(item.id, "startDate", e.target.value, experience, setExperience)
                    }
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="date"
                    placeholder="End Date"
                    value={item.endDate}
                    onChange={(e) =>
                      handleFieldChange(item.id, "endDate", e.target.value, experience, setExperience)
                    }
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => deleteField(item.id, experience, setExperience)}
                    className="ml-2 text-white bg-blue-900 px-3 py-1 rounded hover:bg-slate-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addExperienceField}
              className="text-white bg-blue-900 px-3 py-1 rounded hover:bg-slate-900"
            >
              + Add Experience
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={clearFields}
          className="bg-blue-900 text-white py-2 rounded hover:bg-slate-900 w-28"
        >
          Clear All
        </button>
      </form>
    </div>
  );
};

export default Form;

 