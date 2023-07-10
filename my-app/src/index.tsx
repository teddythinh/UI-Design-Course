import { createRoot } from "react-dom/client";
import App from "./App";

// REACT 18
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
