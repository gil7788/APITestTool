import React from 'react';

const ParametersInput = ({ parameter, updateParameter, deleteParameter }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="text"
        value={parameter.name}
        onChange={(e) => updateParameter(parameter.id, 'name', e.target.value)}
        placeholder="Parameter Name"
        className="border p-2 rounded w-1/3 mr-2"
      />
      <input
        type="text"
        value={parameter.value}
        onChange={(e) => updateParameter(parameter.id, 'value', e.target.value)}
        placeholder="Parameter Value"
        className="border p-2 rounded w-2/3"
      />
    <button
      onClick={() => deleteParameter(parameter.id)}
      className="bg-red-500 text-white rounded p-2 ml-2 flex items-center justify-center w-9 h-9"
    >
      X
    </button>
    </div>
  );
};

export default ParametersInput;
