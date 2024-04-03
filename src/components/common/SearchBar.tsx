import React, { ChangeEvent } from 'react';
import Input from '../ui/input';

const SearchBar = () => {
  const [value, setValue] = React.useState<string>('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleClearClick(): void {
    setValue('');
  }

  return (
    <div className='flex w-[235px] gap-1 items-center px-2 text-t11-body-2 bg-light-neutral-9  border rounded-3 border-dark-neutral-2 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 hover:border-2 focus-visible:border-2'>
      <p className='flex-shrink'>Q</p>
      <Input
        placeholder='Search'
        variant='md'
        className='flex-1'
        value={value}
        onChange={handleInputChange}
      />
      {value && (
        <p className='flex-shrink cursor-pointer' onClick={handleClearClick}>
          X
        </p>
      )}
    </div>
  );
};

export default SearchBar;
