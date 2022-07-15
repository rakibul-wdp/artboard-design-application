import React, { useLayoutEffect } from 'react';
import SignOut from '../Shared/SignOut/SignOut';
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

const Drawing = () => {
  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    const roughCanvas = rough.canvas(canvas);
    const rect = generator.rectangle(10, 10, 100, 100);
    const line = generator.line(10, 10, 110, 110);
    roughCanvas.draw(rect);
    roughCanvas.draw(line);
  });

  return (
    <div>
      <SignOut />
      <div>
        <canvas id='canvas' width={window.innerWidth} height={window.innerHeight}>
          Canvas
        </canvas>
      </div>
    </div>
  );
};

export default Drawing;
