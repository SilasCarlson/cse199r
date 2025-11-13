import type { JSX } from "react";
import Navigation from "../components/Navigation";

function BaseLayout({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element {
    return (
        <>
            <Navigation />
            {children}
        </>
    )
}

export default BaseLayout;