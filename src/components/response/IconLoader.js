import React from 'react';
import { Oval } from 'react-loader-spinner';

const IconLoader = ({ isLoading, icon_color = '#4fa94d' }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Oval
        height={150}
        width={150}
        color={icon_color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor={icon_color}
        strokeWidth={1}
        strokeWidthSecondary={1}
      />
    </div>
  );
};

export default IconLoader;
