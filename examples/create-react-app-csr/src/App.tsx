import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "shared";

import { DetailsPage } from "./pages/DetailsPage";
import { ListPage } from "./pages/ListPage";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/:pokemonId/:name" element={<DetailsPage />} />
          <Route path="/" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
