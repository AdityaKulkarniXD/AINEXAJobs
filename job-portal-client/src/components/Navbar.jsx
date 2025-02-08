import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: "/", title: "Start a search" },
        { path: "/my-job", title: "My Jobs" },
        { path: "/salary", title: "Salary Estimate" },
        { path: "/post-job", title: "Post A Job" },
        { path: "http://localhost:8502/", title: "Career Guidance", external: true }, // External flag
        { path: "http://localhost/Ainexa/home.php", title: "AINEXA-β", external: true } // External flag
    ];

    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <nav className='flex justify-between items-center py-6'>
                <Link to="/" className="flex items-center gap-2 text-2xl text-black">
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4"/>
                        <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"/>
                    </svg>
                    {/* <img src="/images/icon.png" alt="" width="60"/> */}
                    <span>AINEXA</span>
                </Link>

                {/* Navigation items for large devices */}
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ path, title, external }) => (
                        <li key={path} className="text-base text-primary">
                            {external ? (
                                <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600"
                                >
                                    {title}
                                </a>
                            ) : (
                                <NavLink
                                    to={path}
                                    activeClassName="active" // Apply your active class here
                                    className="hover:text-blue-600"
                                >
                                    {title}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Sign up and login buttons */}
                <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
                    <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
                    <Link to="/signup" className="py-2 px-5 border rounded bg-blue text-white">Sign up</Link>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggler}>
                        {isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>}
                    </button>
                </div>
            </nav>

            {/* Mobile navigation menu */}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                    {navItems.map(({ path, title, external }) => (
                        <li key={path} className="text-base text-white first:text-white py-1">
                            {external ? (
                                <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 px-4 hover:text-blue-600"
                                >
                                    {title}
                                </a>
                            ) : (
                                <NavLink
                                    to={path}
                                    activeClassName="active" // Apply your active class here
                                    className="block py-2 px-4 hover:text-blue-600"
                                >
                                    {title}
                                </NavLink>
                            )}
                        </li>
                    ))}
                    <li className="text-white py-1"><Link to="/login">Log in</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
