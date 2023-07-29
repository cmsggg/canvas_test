// ===== Library =====

import ReactDom from "react-dom/client"

// ===== Components =====

import App from "./App"

// ===== Code =====

const root = document.getElementById("root")
ReactDom.createRoot(root).render(
    <App/>
)