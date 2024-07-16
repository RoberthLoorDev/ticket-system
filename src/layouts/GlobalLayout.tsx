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
        <div className="flex w-full ">
            <VerticalNavbar />
            <main className="w-full">{children}</main>
        </div>
    );
}
