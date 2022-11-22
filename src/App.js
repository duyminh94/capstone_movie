import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
// import Loading from "./Components/Error/Loading";

import router from "./Routers/router";

function App() {
  return (
  <Suspense fallback={<h1>Loading....</h1>}>
    <RouterProvider router={router} />;
  </Suspense>
  )
}

export default App;
