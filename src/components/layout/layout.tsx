import React from "react";
import Header from "@/components/layout/header";
// import Footer from "@/components/layout/footer";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background backdrop-blur">
                <Header />
            </div>
            <main className="min-h-svh">{children}</main> {/* Main content */}
            <footer>
               
            </footer>

            <Button variant={"outline"} size={"icon"} onClick={() => window.scrollTo(0, 0)} className="rounded-full fixed bottom-4 right-4 ">
                <ChevronUp size={32} />
            </Button>

        </div>
    );
};

export default Layout;