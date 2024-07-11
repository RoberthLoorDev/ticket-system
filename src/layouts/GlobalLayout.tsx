import { ReactNode, useEffect } from "react";
import VerticalNavbar from "../components/layout/VerticalNavbar";

interface LayoutProps {
    children: ReactNode;
    title: string;
}

export default function GlobalLayout({ children, title }: LayoutProps) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className="flex">
            <VerticalNavbar />
            <main>{children}</main>
        </div>
    );
}
