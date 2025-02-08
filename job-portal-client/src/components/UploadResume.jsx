import React, { useState } from 'react';

const UploadResume = () => {
  const [file, setFile] = useState(null); // State to hold the selected file
  const [uploading, setUploading] = useState(false); // State to track uploading state
  const [resumeUrl, setResumeUrl] = useState(''); // State to store the uploaded resume URL

  // Function to handle file selection
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

  // Function to handle file upload
  const handleUpload = () => {
    if (file) {
      setUploading(true);
      const formData = new FormData();
      formData.append('resume', file); // Append the file to FormData

      // Simulate API call to upload file (replace with your actual upload logic)
      setTimeout(() => {
        // Assuming upload is successful, update resumeUrl state with mock URL
        const mockResumeUrl = 'https://example.com/path/to/resume.pdf';
        setResumeUrl(mockResumeUrl);
        setUploading(false);
        alert('Resume uploaded successfully!');
      }, 2000); // Simulating delay for demonstration
    } else {
      alert('Please select a file to upload.');
    }
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
    </div>
  );
};

export default UploadResume;
