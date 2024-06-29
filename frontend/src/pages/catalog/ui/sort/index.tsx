import React, { useState } from 'react';
import style from './style.module.css';
import { Button, Icon } from '@gravity-ui/uikit';
import {ArrowUpArrowDown} from '@gravity-ui/icons';

interface Option {
  label: string;
  value: string;
}

interface DropdownMenuProps {
  options: Option[];
}

const Sort: React.FC<DropdownMenuProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  const selectedLabel = options.find(option => option.value === selectedOption)?.label;

  return (
      <div className={style.dropdown}>
          <Button onClick={() => setIsOpen(!isOpen)} size='s' className={style.button}>
              <Icon data={ArrowUpArrowDown} size={18} />
              Сортировать по: {selectedLabel}
          </Button>
          {isOpen && (
              <div className={style.dropdown__menu}>
                  {options.map(option => (
                      <label key={option.value}>
                          <input
                            type="radio"
                            name="dropdown"
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={handleOptionChange}
                        />
                          {option.label}
                      </label>
                    ))}
                  </div>
                )}
      </div>
  );
};

export default Sort;