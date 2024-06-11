import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { NavLink } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Settings,
    Users2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardNavProps {
    children: React.ReactNode;
}

const DashboardNav = ({ children }: DashboardNavProps) => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40 z-50">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <NavLink
                        to="/"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Giặt xấy nhanh</span>
                    </NavLink>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <NavLink
                                to="/dashboard-home"
                                className={({ isActive }) => isActive ? "bg-accent" : ""}

                            >
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Dashboard</span>
                            </NavLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                   
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <NavLink
                                to="/dashboard-service"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Package className="h-5 w-5" />
                                <span className="sr-only">Dịch vụ</span>
                            </NavLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dịch vụ</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <NavLink
                                to="/dashboard-user"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Users2 className="h-5 w-5" />
                                <span className="sr-only">Khách hàng</span>
                            </NavLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">Khách hàng</TooltipContent>
                    </Tooltip>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <NavLink
                                to="/"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </NavLink>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <NavLink
                                    to="/"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Food Shop</span>
                                </NavLink>
                                <NavLink
                                    to="/dashboard-home"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </NavLink>
                               
                                <NavLink
                                    to="/"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Dịch vụ
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="h-5 w-5" />
                                    Khách hàng
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5" />
                                    Settings
                                </NavLink>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <div id="dashboard-content">
                    {/* Dashboard content goes here */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export { DashboardNav }