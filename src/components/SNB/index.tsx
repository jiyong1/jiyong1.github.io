import React from 'react';

import SNBRoot from './SNBRoot';
import SNBTopBtn from './SNBTopBtn';

const SNB = (): JSX.Element => {
  return (
    <>
      {SNBRoot ? (
        <SNBRoot>
          <SNBTopBtn />
        </SNBRoot>
      ) : (
        <></>
      )}
    </>
  );
};

export default SNB;
