import App from "./App";
import "./index.css";
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById("root");
ReactDOMClient.createRoot(container!).render(<App />);
//非空断言