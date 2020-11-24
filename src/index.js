import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
// Reducers import
import reducers from "./store"
import { createStore } from "redux"
import { Provider } from "react-redux"

// store creation
const store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap app with provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
