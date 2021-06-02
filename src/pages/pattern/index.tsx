import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import Header from 'components/header';
import Quilt from 'components/quilt';

const PatternPage: NextPage = () => {
    let quiltHolder;
    quiltHolder = <Quilt size='crib' />;
  

  const router = useRouter();
  return (
    <div>
        <Header />
        <div className="grid grid-cols-2">
                <div>{quiltHolder}</div>
                <div>Hah</div>
        </div>
    </div>
  );
};

export default PatternPage;