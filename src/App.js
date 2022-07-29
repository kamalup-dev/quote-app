import React, {Suspense} from "react" 
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Compose = React.lazy(()=> import("./pages/Compose"))
const Quotes = React.lazy(()=>import("./pages/Quotes"))
const CommentSection = React.lazy(()=>import("./pages/CommentSection"))
const NotFound = React.lazy(()=>import("./pages/NotFound"))

function App() {
  return (
    <div>
      <MainNavigation />
      <Layout>
      <Suspense fallback={<div className="centered">
        <LoadingSpinner />
      </div>}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/all-quotes?sort=asc" replace />}
          />
          <Route path="/all-quotes" element={<Quotes />} />
          <Route path="/all-quotes/:id/*" element={<CommentSection/>} />
          <Route path="/add-quote" element={<Compose />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      </Layout>
    </div>
  );
}

export default App;
