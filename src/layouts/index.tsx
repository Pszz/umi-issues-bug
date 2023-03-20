import React, { useMemo } from 'react';
import { Outlet } from 'umi';

const BasicLayout: React.FC = (props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BasicLayout;
