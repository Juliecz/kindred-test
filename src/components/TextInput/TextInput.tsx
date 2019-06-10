import * as React from 'react';

import './style.less';

interface ITextInput {
  name: string;
  value: string;
  className?: string;
  labelClassName?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onBlur?: () => void;
}

const TextInput: React.FunctionComponent<ITextInput> = (props: ITextInput) => {
  const { name, value, className, labelClassName, onFocus, onChange, onClick, onBlur } = props;

  return (
    <label className={labelClassName || ''} htmlFor={name}>
      <input
        name={name}
        type="text"
        className={className || ''}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
      />
    </label>
  );
};

export default TextInput;
