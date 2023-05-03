/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';
import { FaFilePdf } from "react-icons/fa";




const Blog = () => {
    const ref = useRef();

    return (
      <div className='container mx-auto p-8'>
        <div  ref={ref}>
        <h1 className='text-3xl font-bold py-4'># Q&A</h1>
        {/* uncontrolled and controlled components */}
        <h3 className='text-xl font-semibold'>* Differences between uncontrolled and controlled components?</h3>
        <h4 className='text-lg font-semibold px-4 underline'>Uncontrolled components:</h4>
        <p className='px-8'>
            
            
            <li>Store their own state internally, without relying on React state</li>
            <li>Use refs to access their current values</li>
            <li>Suitable for simple forms or inputs where state management isn't necessary</li>
            <li>Can be easier and faster to set up than controlled components</li>
            
        </p>
        <h4 className='text-lg font-semibold px-4 underline'>Uncontrolled components:</h4>
        <p className='px-8'>
            
            <li>Use React state to store their values</li>
            <li>Rely on event handlers to update their state and re-render</li>
            <li>Allow for more fine-grained control over form data</li>
            <li>Useful when form validation, data manipulation, or data submission is required</li>
        </p>

        {/* validate React props using PropTypes */}
        <h3 className='text-xl font-semibold pt-4'>* How to validate React props using PropTypes</h3>
        
        <p className='px-8'>
            
            
            <li>Import the prop-types package in  component file.</li>
            <li>Create an object with the prop names as keys and the corresponding PropTypes validators as values.</li>
            <li>Add the propTypes object as a static property to the component.</li>
            <li>When a prop is passed to your component, PropTypes will check its type against the validators and log a warning if the types do not match.</li>
            
        </p>

        {/* node & express js */}
        <h3 className='text-xl font-semibold pt-4'>* Difference between node js and express js?</h3>
        
        <p className='px-8'>
            
            
            <li>Node.js: A JavaScript runtime that allows you to run JavaScript code on the server-side.</li>
            <li>Express.js: A web application framework built on top of Node.js that provides a set of features for building web applications.</li>
            <li>Node.js: Provides core modules and APIs for performing operations such as file I/O, networking, and HTTP requests.</li>
            <li>Express.js: Provides higher-level APIs for building web applications, including routing, middleware, and template rendering.</li>
            
        </p>
        {/* custom hook */}
        <h3 className='text-xl font-semibold pt-4'>* What is a custom hook, and why will you create a custom hook?

?</h3>
        <p className='px-8'>
            
            
            <li>A custom hook is a reusable function containing logic and state that can be shared across multiple React components.</li>
            <li>Custom hooks abstract away complex logic and state management from components, making code more modular and reusable.</li>
            <li>Custom hooks encapsulate logic needed in multiple places, making it easier to maintain and update.</li>
            <li>Custom hooks enable creation of specialized hooks on top of existing React hooks, tailoring hooks to specific use cases.</li>
            
        </p>
      </div>
      {/* pdf button */}
        <div className='text-center py-8'>
        <ReactToPdf className='px-8' targetRef={ref} filename="blog.pdf">
          {({ toPdf }) => <button className='btn' onClick={toPdf}><FaFilePdf className='mr-1'></FaFilePdf> Generate pdf</button>}
        </ReactToPdf>
        </div>
      </div>
    );
  };
export default Blog;