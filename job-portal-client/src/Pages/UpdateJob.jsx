import React, { useState } from 'react';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [resumeUrl, setResumeUrl] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
      } else {
        alert('Please select a PDF file.');
      }
    }
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true);
      const formData = new FormData();
      formData.append('resume', file);

      setTimeout(async () => {
        try {
          const parsedResume = await ResumeParser.parseResume(file);
          const { skills } = parsedResume;

          filterJobsBySkills(skills);

          setUploading(false);
          alert('Resume uploaded and parsed successfully!');
        } catch (error) {
          console.error('Error parsing resume:', error);
          alert('Error parsing resume. Please try again.');
          setUploading(false);
        }
      }, 2000);
    } else {
      alert('Please select a file to upload.');
    }
  };

  const filterJobsBySkills = (skills) => {
    // Example: Filtering jobs based on skills (replace with your actual logic)
    const filteredJobs = allJobs.filter(job => {
      return skills.some(skill => job.requiredSkills.includes(skill));
    });

    setFilteredJobs(filteredJobs);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Upload Your Resume</h2>
      <input type="file" onChange={handleFileChange} accept="application/pdf" />
      <button onClick={handleUpload} disabled={uploading || !file} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {resumeUrl && (
        <p className="mt-4">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            View Uploaded Resume
          </a>
        </p>
      )}
      <hr className="my-6" />
      <h2 className="text-lg font-semibold mb-4">Filtered Jobs</h2>
      {filteredJobs.length > 0 ? (
        <ul>
          {filteredJobs.map(job => (
            <li key={job.id}>
              <p>{job.title}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs match your skills.</p>
      )}
    </div>
  );
};

export default UploadResume;
