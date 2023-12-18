import React, { useState } from 'react';
import ParametersInput from './ParametersInput';

const ParametersComponent = ({ onParametersChange }) => {
  const [parameters, setParameters] = useState([{ id: Date.now(), name: '', value: '' }]);

  const addParameter = () => {
    setParameters([...parameters, { id: Date.now(), name: '', value: '' }]);
  };

  const updateParameter = (id, key, value) => {
    const newParameters = parameters.map(param => {
      if (param.id === id) {
        return { ...param, [key]: value };
      }
      return param;
    });
    setParameters(newParameters);
    onParametersChange(newParameters);
  };

  const deleteParameter = (id) => {
    const newParameters = parameters.filter(param => param.id !== id);
    setParameters(newParameters);
    onParametersChange(newParameters);
  };

  return (
    <div>
      <h3 className='font-bold'>Parameters</h3>
      {parameters.map((parameter) => (
        <ParametersInput
          key={parameter.id}
          parameter={parameter}
          updateParameter={updateParameter}
          deleteParameter={deleteParameter}
        />
      ))}
      <button type="button" onClick={addParameter} className="bg-blue-500 text-white p-2 rounded mb-2 mt-1 w-4/12">Add Parameter</button>
    </div>
  );
};

export default ParametersComponent;
