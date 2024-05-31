import CodeBlock from "./components/code-block";
import Queue from "./components/queue";

function App() {
  const sampleCode = `
   class QueueDS {
  constructor() {
    this.items = [];
  }
  //lifo
  enqueue(item) {
    return this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
}

  `;

  return (
    <div className="p-4">
      <Queue />

      {/* <CodeBlock code={sampleCode} /> */}
    </div>
  );
}

export default App;
