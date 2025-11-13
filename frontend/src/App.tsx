import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./routes/RequireAuth";
import RequireGuest from "./routes/RequireGuest";
import Home from "./pages/Home";
import type { JSX } from "react";

// Pages
import Login from "./pages/Login";
import Study from "./pages/Study";
import BaseLayout from "./layouts/BaseLayout";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={
                    <RequireGuest><Login /></RequireGuest>
                } />
                <Route path="/study/:setId" element={
                    <RequireAuth><Study /></RequireAuth>
                } />
                <Route path="*" element={
                    <BaseLayout><p>404 page not found.</p></BaseLayout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
