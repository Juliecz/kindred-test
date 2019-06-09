import * as React from 'react';

import './style.less';

interface ITextInput {
  value: string;
  className?: string;
  labelClassName?: string;
  onFocus?: (event: any) => void;
  onChange?: (event: any) => void;
  onClick?: () => void;
  onBlur?: () => void;
}

const TextInput: React.FunctionComponent<ITextInput> = (props: ITextInput) => {
  const { value, className, labelClassName, onFocus, onChange, onClick, onBlur } = props;

  return (
    <label className={labelClassName || ''}>
      <input
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
