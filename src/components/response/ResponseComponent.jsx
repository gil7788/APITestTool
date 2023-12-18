import React from 'react';

const ResponseComponent = ({ responseData }) => {
  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="font-bold">Response</h3>
      <pre className="whitespace-pre-wrap text-sm">
        {JSON.stringify(responseData, null, 2)}
      </pre>
    </div>
  );
};

export default ResponseComponent;
