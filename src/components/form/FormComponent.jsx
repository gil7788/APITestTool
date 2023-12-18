import React, { useState } from 'react';
import axios from 'axios'; 
import HeadersComponent from './HeadersComponent';
import ParametersComponent from './ParametersComponent';

const FormComponent = ({ onResponse }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState([]);
  const [parameters, setParameters] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onResponse(null);

    try {
      const config = {
        method: method,
        url: url,
        headers: headers.reduce((acc, { key, value }) => {
          if (key && value) acc[key] = value;
          return acc;
        }, {}),
        data: (method !== 'GET' && method !== 'DELETE') ? JSON.parse(headers.find(h => h.key === "Content-Type")?.value || '{}') : null,
      };

      const response = await axios(config);
      console.log(response.data);
      onResponse(response);
    } catch (error) {
      console.error('Error sending request:', error);
      onResponse(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <h3 className='font-bold'>URL</h3>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Endpoint URL"
          className="border p-2 rounded w-full mb-2"
        />
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>

        <HeadersComponent method={method} onHeadersChange={setHeaders} />
        
        <ParametersComponent onParametersChange={setParameters} />

        <div className='flex justify-center mt-10'>
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-7/12 h-12">
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
