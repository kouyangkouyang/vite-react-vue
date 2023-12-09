import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routerConfig from "./router";
import { Spin } from "antd";
import "./App.css";

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <Spin size="large" />
          </div>
        }
      >
        {useRoutes(routerConfig)}
      </Suspense>
    </div>
  );
}

export default App;
