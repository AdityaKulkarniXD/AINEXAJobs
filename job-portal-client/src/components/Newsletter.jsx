import React, { useState } from 'react';
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa';

const Newsletter = () => {
  const [file, setFile] = useState(null); // State to hold the selected file

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
      // You can implement file upload logic here
      // For demonstration, I'm just alerting the file name
      alert(`Uploading file: ${file.name}`);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      {/* First Part - Email Subscription */}
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaEnvelopeOpenText /> Email me for jobs
        </h3>
        <p className='text-primary/75 text-base mb-4'>
          Reach out today for personalized job recommendations tailored to your skills and career goals.
        </p>
        <div className='w-full space-y-4'>
          <input type="email" name='Email' id='email' placeholder='name@example.com' className='w-full block py-2 pl-3 border focus-outline-none ' />
          <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus-outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
        </div>
      </div>

      {/* Second Part - Upload Resume */}
      <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
          <FaRocket /> Get noticed faster
        </h3>
        <p className='text-primary/75 text-base mb-4'>
          Elevate your job search with personalized career guidance aligned with your aspirations and expertise
        </p>
        <div className='w-full space-y-4'>
          <button className='w-full block py-2 pl-3 border focus outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'><a href='http://localhost:8501/'>
            Upload your Resume
          </a></button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
