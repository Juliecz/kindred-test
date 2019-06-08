import * as React from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };
  
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
