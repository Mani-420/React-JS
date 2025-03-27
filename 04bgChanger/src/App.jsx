import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');
  return (
    <>
      <div
        className="w-full h-screen duration-200 bg-black"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setBgColor('red')}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-xl"
              style={{ backgroundColor: 'red' }}
            >
              Red
            </button>
            <button
              onClick={() => setBgColor('green')}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-xl"
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>
            <button
              onClick={() => setBgColor('blue')}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-xl"
              style={{ backgroundColor: 'blue' }}
            >
              Blue
            </button>
            <button
              onClick={() => setBgColor('yellow')}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-xl"
              style={{ backgroundColor: 'yellow' }}
            >
              Yellow
            </button>
            <button
              onClick={() => setBgColor('olive')}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-xl"
              style={{ backgroundColor: 'olive' }}
            >
              Olive
            </button>
            <button
              onClick={() => setBgColor('purple')}
              className="outline-none px-4  py-1 rounded-xl text-white shadow-xl"
              style={{ backgroundColor: 'purple' }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
