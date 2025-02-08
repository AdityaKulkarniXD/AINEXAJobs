import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyJobs = () => {
  // State variables
  const [jobs, setJobs] = useState([]); // State to hold all jobs fetched from the server
  const [filteredJobs, setFilteredJobs] = useState([]); // State to hold jobs filtered based on search text
  const [searchText, setSearchText] = useState(''); // State to hold the current search text input value
  const [isLoading, setIsLoading] = useState(true); // State to indicate if data is being loaded
  const [isDeleting, setIsDeleting] = useState(false); // State to indicate if a delete operation is in progress
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const itemsPerPage = 4; // Number of jobs to display per page

  // Fetch jobs from the server on component mount
  useEffect(() => {
    setIsLoading(true); // Set loading state to true
    fetch(`http://localhost:3000/myJobs/projects.beastwolfxd@gmail.com`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data); // Set fetched jobs to the state
        setIsLoading(false); // Set loading state to false after fetching
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setIsLoading(false); // Set loading state to false on error
      });
  }, []);

  // Filter jobs based on search text whenever searchText or jobs change
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredJobs(jobs); // If search text is empty, display all jobs
    } else {
      const filtered = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchText.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredJobs(filtered); // Filter jobs based on job title or company name
    }
  }, [searchText, jobs]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  // Next page handler
  const nextPage = () => {
    if (indexOfLastItem < filteredJobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page handler
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredJobs(jobs); // If search text is empty, display all jobs
    } else {
      const filtered = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchText.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredJobs(filtered); // Filter jobs based on job title or company name
    }
  };

  // Handle delete button click for a job
  const handleDelete = (id) => {
    setIsDeleting(true); // Set deleting state to true
    fetch(`http://localhost:3000/job/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          // Job deleted successfully, update the jobs state
          const updatedJobs = jobs.filter((job) => job._id !== id);
          setJobs(updatedJobs); // Update jobs state
          setFilteredJobs(updatedJobs); // Update filtered jobs as well
          alert('Job Deleted Successfully!!!'); // Show success message
        }
      })
      .catch((error) => {
        console.error('Error deleting job:', error); // Log error if delete operation fails
      })
      .finally(() => {
        setIsDeleting(false); // Reset deleting state
      });
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='my-jobs-container'>
        <h1 className='text-center p-4'>All My Jobs</h1>
        <div className='search-box p-2 text-center mb-2'>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type='text'
            name='search'
            id='search'
            className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'
          />
          <button
            className='bg-blue text-white font-semibold px-8 py-2 rounded-sem mb-4'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Table section */}
      <section className='py-1 bg-blueGray-50'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5'>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded '>
            <div className='rounded-t mb-0 px-4 py-3 border-0'>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                  <h3 className='font-semibold text-base text-blueGray-700'>
                    All Jobs
                  </h3>
                </div>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1 text-right'>
                  <Link to='/post-job'>
                    <button className='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                      Post A New Job
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='block w-full overflow-x-auto'>
              <table className='items-center bg-transparent w-full border-collapse '>
                <thead>
                  <tr>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      NO
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      TITLE
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      COMPANY NAME
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      SALARY
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      EDIT
                    </th>
                    <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                      DELETE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? ( // Display loading message while data is being fetched
                    <tr>
                      <td colSpan='6' className='text-center py-4'>
                        Loading...
                      </td>
                    </tr>
                  ) : currentJobs.length === 0 ? ( // Display message if no jobs match the filter
                    <tr>
                      <td colSpan='6' className='text-center py-4'>
                        No jobs found.
                      </td>
                    </tr>
                  ) : (
                    // Map through current jobs and display each job in a table row
                    currentJobs.map((job, index) => (
                      <tr key={index}>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700'>
                          {index + 1 + indexOfFirstItem} {/* Display job index */}
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 '>
                          {job.jobTitle} {/* Display job title */}
                        </td>
                        <td className='border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                          {job.companyName} {/* Display company name */}
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                          ${job.minPrice}-${job.maxPrice} {/* Display salary range */}
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                          <button>
                            <Link to={`/edit-job/${job._id}`}>Edit</Link> {/* Link to edit job */}
                          </button>
                        </td>
                        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                          <button
                            onClick={() => handleDelete(job._id)}
                            className='bg-red-700 py-2 px-6 text-white rounded-sm'
                            disabled={isDeleting} // Disable delete button while deleting
                          >
                            {isDeleting ? 'Deleting...' : 'Delete'} {/* Display delete text based on delete state */}
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
        {/* Pagination */}
        <div className='flex justify-center text-black space-x-8 mb-8'>
          {currentPage > 1 && (
            <button className='hover:underline' onClick={prevPage}>
              Previous
            </button>
          )}
          {indexOfLastItem < filteredJobs.length && (
            <button onClick={nextPage} className='hover:underline'>
              Next
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyJobs;
