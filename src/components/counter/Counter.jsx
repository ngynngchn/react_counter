import "./Counter.css";
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<section>
			<h2>
				Counter <span>{count}</span>
			</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(0)}>RESET</button>
		</section>
	);
};

export default Counter;
