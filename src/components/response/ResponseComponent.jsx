import React from 'react';
import IconLoader from './IconLoader';

const ResponseComponent = ({ responseData, isLoading }) => {
  if (isLoading) {
    console.log('Waiting for response...');
    return (
      <div>
        <p className='font-bold'>Waiting for response...</p>
        <IconLoader isLoading={isLoading} icon_color="#4299e1" />
      </div>
    
    );
  }

  if (!responseData) return null;
  
  return (
    <pre className="whitespace-pre-wrap text-sm">
      {JSON.stringify(responseData, null, 2)}
    </pre>
  );
};


export default ResponseComponent;