import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-48" data-testid="loader">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
