import React from 'react';
import CreatableSelect from 'react-select/creatable';

const HeaderInput = ({ header, updateHeader, deleteHeader, options }) => {
  const handleKeyChange = (newValue) => {
    updateHeader(header.id, 'key', newValue ? newValue.value : '');
  };

  const handleValueChange = (event) => {
    updateHeader(header.id, 'value', event.target.value);
  };

  const selectOptions = options.map(option => ({ value: option, label: option }));

  return (
    <div className="flex items-center mb-2">
      <CreatableSelect
        value={{ value: header.key, label: header.key }}
        onChange={handleKeyChange}
        options={selectOptions}
        isClearable
        className="w-1/3 mr-2"
        placeholder="Select or type..."
      />
      <input
        type="text"
        value={header.value}
        onChange={handleValueChange}
        placeholder="Value"
        className="border p-2 rounded w-2/3"
      />
      <button
        onClick={() => deleteHeader(header.id)}
        className="bg-red-500 text-white rounded p-2 ml-2 flex items-center justify-center w-9 h-9"
      >
        X
      </button>
    </div>
  );
};

export default HeaderInput;
