import React from 'react';
import Select from 'react-select';

const HeaderInput = ({ header, updateHeader, deleteHeader, options }) => {
  const handleKeyChange = (selectedOption) => {
    updateHeader(header.id, 'key', selectedOption ? selectedOption.value : '');
  };

  const handleValueChange = (event) => {
    updateHeader(header.id, 'value', event.target.value);
  };

  const selectOptions = options.map(option => ({ value: option, label: option }));
  selectOptions.push({ value: header.key, label: header.key });

  return (
    <div className="flex items-center mb-2">
      <Select
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
      <button onClick={() => deleteHeader(header.id)} className="bg-red-500 text-white p-2 rounded ml-2">X</button>
    </div>
  );
};

export default HeaderInput;
