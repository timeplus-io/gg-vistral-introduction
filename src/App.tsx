/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import SlideDeck from './components/SlideDeck';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';

const Slide17 = React.lazy(() => import('./slides/Slide17'));

export default function App() {
  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />,
    <Slide5 key="slide5" />,
    <Slide6 key="slide6" />,
    <Slide7 key="slide7" />,
    <Slide8 key="slide8" />,
    <Slide9 key="slide9" />,
    <Slide10 key="slide10" />,
    <Slide11 key="slide11" />,
    <Slide12 key="slide12" />,
    <Slide13 key="slide13" />,
    <Slide14 key="slide14" />,
    <Slide15 key="slide15" />,
    <Slide16 key="slide16" />,
    <Suspense key="slide17" fallback={<div className="flex items-center justify-center h-full text-gray-500">Loading Vistral Examples...</div>}>
      <Slide17 />
    </Suspense>
  ];

  return <SlideDeck slides={slides} />;
}
