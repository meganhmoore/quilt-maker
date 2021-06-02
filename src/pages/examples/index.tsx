import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

import Examples from 'components/examples';
import Header from 'components/header';

const ExamplePage: NextPage = () => {
  const router = useRouter();
  return (
      <div>
      <Header />
      <Examples />
      </div>
  );
};

export default ExamplePage;
