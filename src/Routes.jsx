import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const ProjectsevenpivercelappbyhtmltodesignFREEversi = React.lazy(
  () => import("pages/ProjectsevenpivercelappbyhtmltodesignFREEversi"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/projectsevenpivercelappbyhtmltodesignfreeversi"
            element={
              <ProtectedRoute
                element={ProjectsevenpivercelappbyhtmltodesignFREEversi}
              />
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
