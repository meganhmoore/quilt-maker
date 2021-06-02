import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import Header from 'components/header';
import DesignBox from 'components/design-box';

const DesignPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <DesignBox />
    </div>
  );
};

export default DesignPage;