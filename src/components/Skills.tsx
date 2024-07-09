import  { useState, useEffect, FC } from 'react';

interface Option {
  value: string;
  label: string;
}

const Skills: FC = () => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddSkill = () => {
    if (inputValue.trim() !== '') {
      const newOption: Option = { value: inputValue, label: inputValue };
      setSelectedValues([...selectedValues, newOption]);
      setInputValue('');
    }
  };

  const handleRemoveSkill = (value: string) => {
    const updatedValues = selectedValues.filter(option => option.value !== value);
    setSelectedValues(updatedValues);
  };

  useEffect(() => {
    // تحويل القيم إلى string وتخزينها في localStorage
    const selectedValuesAsString = JSON.stringify(selectedValues.map(option => option.value));
    localStorage.setItem('user-skills', selectedValuesAsString);
  }, [selectedValues]);

  return (
    <div id='skill'>
      <p className="text-extrabold text-2xl text-center mt-4">Skills</p>
      <p className="mb-6">*Required</p>
      <div className="flex justify-around">
        <div className="md:col-span-5">
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border p-2 rounded"
              placeholder="Add a skill"
            />
            <button
              onClick={handleAddSkill}
              className="ml-2 p-2 bg-red-800 text-white rounded"
            >
              Add
            </button>
          </div>
          <div className="mt-4">
            {selectedValues.map(option => (
              <div key={option.value} className="flex items-center justify-between border p-2 rounded mb-2">
                <span>{option.label}</span>
                <button
                  onClick={() => handleRemoveSkill(option.value)}
                  className="ml-2 p-1 bg-red-400 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;