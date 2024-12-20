import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Preview = ({ resumeData, education, experience }) => {
  return (
    <div className="w-full md:w-1/2 p-6 rounded-lg shadow-lg">
     
      <div className="bg-blue-900 text-white rounded-xl p-4">
        <div className="text-center">
          {resumeData.fullName && <p className="text-2xl font-bold">{resumeData.fullName}</p>}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
          {resumeData.email && (
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> {resumeData.email}
            </p>
          )}
          {resumeData.phone && (
            <p className="flex items-center">
              <FaPhone className="mr-2" /> {resumeData.phone}
            </p>
          )}
          {resumeData.address && (
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {resumeData.address}
            </p>
          )}
        </div>
      </div>

       <div className="mt-6">
        {education   && 
          <div>
            <h2 className="bg-blue-600 text-center text-white rounded-xl py-2 mb-4">EDUCATION</h2>
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-lg text-gray-600">
                    {edu.startDate} {edu.startDate && edu.endDate && <span>-</span>} {edu.endDate}
                  </p>
                  <p className="font-bold text-lg">{edu.school}</p>
                  <p className="text-sm">{edu.city}</p>
                </div>
                <br></br>
                <p className="text-lg text-gray-700">{edu.degree}</p>
              </div>
            ))}
          </div>
        }
      </div>

       <div className="mt-6">
        {experience.length > 0 && (
          <div>
            <h2 className="bg-blue-600 text-center text-white rounded-xl py-2 mb-4">EXPERIENCE</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-lg text-gray-600">
                    {exp.startDate} {exp.startDate && exp.endDate && <span>-</span>} {exp.endDate}
                  </p>
                  <p className="font-bold text-lg">{exp.company}</p>
                  <p className="text-lg">{exp.location}</p>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700">{exp.jobTitle}</p>
                  {exp.description && <p className="text-sm text-gray-600 mt-2">{exp.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;