import { useRef, useState } from "react";

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [counter, setCounter] = useState(0);
  const forwardArrow = useRef(null);
  const backwardArrow = useRef(null);
  const timerId = useRef(null);
  const timerIdback = useRef(null);
  const handleEnqueue = () => {
    setQueue((queue) => [...queue, counter]);
    setCounter((counter) => counter + 1);
    backwardArrow.current.style.display = "block";
    clearTimeout(timerIdback.current);
    timerIdback.current = setTimeout(() => {
      backwardArrow.current.style.display = "none";
    }, 300);
    console.log(backwardArrow.current.style);
  };

  const handleDequeue = () => {
    setQueue((queue) => {
      let curr = [...queue];
      curr.shift();
      return curr;
    });
    forwardArrow.current.style.display = "block";
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      forwardArrow.current.style.display = "none";
    }, 300);
    console.log(forwardArrow.current.style);
  };
  return (
    <div className="p-4 flex flex-col gap-10">
      <h1 className="text-blue-600 font-sans text-6xl">Queue Data Structure</h1>

      <main className="flex flex-wrap items-center border-2 border-l-0 border-r-0 border-t-green-800 border-b-green-800 p-10 gap-4 relative">
        <div className="flex justify-center items-center">
          <button ref={forwardArrow} className="hidden absolute left-0">
            ⬅
          </button>
        </div>
        {queue.map((item) => (
          <div
            key={item}
            className="bg-green-400 text-white h-12 w-12 text-center rounded-xl flex items-center justify-center text-xl flex-wrap"
          >
            {item}
          </div>
        ))}
        <button className="hidden" ref={backwardArrow}>
          ⬅
        </button>
      </main>

      <footer className="flex flex-col gap-10">
        <div className="flex gap-4">
          <button
            onClick={handleEnqueue}
            className="border border-black px-6 py-2 rounded-full"
          >
            enqueue
          </button>

          <button
            onClick={handleDequeue}
            className="border border-black px-6 py-2 rounded-full"
          >
            dequeue
          </button>
        </div>
        <h2 className="text-4xl text-red-400">
          Front Element : {!queue.length ? "Queue is Empty" : queue[0]}
        </h2>
        <h2 className="text-4xl text-red-400">
          Length of Queue : {queue.length}
        </h2>
      </footer>
    </div>
  );
};

export default Queue;
