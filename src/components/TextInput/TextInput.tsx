import * as React from 'react';

import './style.less';

interface ITextInput {
  value: string;
  className?: string;
  labelClassName?: string;
  onClick: () => void;
  onBlur?: () => void;
}

const TextInput: React.FunctionComponent<ITextInput> = (props: ITextInput) => {
  const { value, className, labelClassName, onClick, onBlur } = props;

  return (
    <label className={labelClassName || ''}>
      <input
        type="text"
        className={className || ''}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
      />
    </label>
  );
};

export default TextInput;
