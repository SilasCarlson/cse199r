import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./routes/RequireAuth";
import RequireGuest from "./routes/RequireGuest";
import Home from "./pages/Home";
import type { JSX } from "react";

// Pages
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Study from "./pages/Study";
import BaseLayout from "./layouts/BaseLayout";
import Sets from "./pages/Sets";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/sets" element = { <RequireAuth><Sets /></RequireAuth> } />
                <Route path="/login" element={
                    <RequireGuest><Login /></RequireGuest>
                } />
                <Route path="/study/:id" element={
                    <RequireAuth><Study /></RequireAuth>
                } />
                <Route path="/logout" element={
                    <RequireAuth><Logout /></RequireAuth>
                } />
                <Route path="*" element={
                    <BaseLayout><p>404 page not found.</p></BaseLayout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
