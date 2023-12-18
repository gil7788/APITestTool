import React, { useState } from 'react';
import HeaderInput from './HeaderInput';

const headersOptions = {
  GET: ["Accept", "Authorization"],
  POST: ["Content-Type", "Authorization"],
  PUT: ["Content-Type", "Authorization"],
  DELETE: ["Authorization"],
};

const HeadersComponent = ({ method, onHeadersChange }) => {
  const [headers, setHeaders] = useState([{ id: Date.now(), key: '', value: '' }]);

  const addHeader = () => {
    setHeaders([...headers, { id: Date.now(), key: '', value: '' }]);
  };

  const updateHeader = (id, key, value) => {
    const newHeaders = headers.map(header => {
      if (header.id === id) {
        return { ...header, [key]: value };
      }
      return header;
    });
    setHeaders(newHeaders);
    onHeadersChange(newHeaders);
  };

  const deleteHeader = (id) => {
    const newHeaders = headers.filter(header => header.id !== id);
    setHeaders(newHeaders);
    onHeadersChange(newHeaders);
  };

  return (
    <div>
      {headers.map((header) => (
        <HeaderInput
          key={header.id}
          header={header}
          updateHeader={updateHeader}
          deleteHeader={deleteHeader}
          options={headersOptions[method]}
        />
      ))}
      <button type="button" onClick={addHeader} className="bg-blue-500 text-white p-2 rounded mb-2">Add Header</button>
    </div>
  );
};

export default HeadersComponent;
