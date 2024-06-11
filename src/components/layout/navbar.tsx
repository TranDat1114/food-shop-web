// import { useNavigate } from 'react-router-dom';
import {
    NavigationMenu,
    // NavigationMenuContent,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { getUser, isAdmin } from '@/lib/utils';
import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const NavigationBar = () => {
    const userInfor = getUser()

    const { logout, isLogin } = useAuth();
    // const navigate = useNavigate();
    return (
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <p className={navigationMenuTriggerStyle()}>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                Trang chủ
                            </NavLink>
                        </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <p className={navigationMenuTriggerStyle()}>
                            <NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>
                                Giới thiệu
                            </NavLink>
                        </p>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <p className={navigationMenuTriggerStyle()}>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                                Liên hệ
                            </NavLink>
                        </p>
                    </NavigationMenuItem>
                    {
                        isAdmin() == true ?
                            <NavigationMenuItem>
                                <p className={navigationMenuTriggerStyle()}>
                                    <NavLink to="/dashboard-home" className={({ isActive }) => isActive ? "active" : ""}>
                                        Dashboard
                                    </NavLink>
                                </p>
                            </NavigationMenuItem>
                            : <></>
                    }
                    {
                        isLogin() == true ?
                            <NavigationMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <img
                                                src="https://pbs.twimg.com/profile_images/1787107492436258816/rlEsw_te_400x400.jpg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="rounded-full"
                                            />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>{userInfor.email}</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Trang cá nhân</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                                onClick={logout}
                                            >
                                                Đăng xuất
                                            </Button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavigationMenuItem>
                            :
                            <NavigationMenuItem>
                                <NavLink to="/signin" >
                                    <Button variant="outline" >
                                        Đăng nhập
                                    </Button>
                                </NavLink>
                            </NavigationMenuItem>
                    }
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
export default NavigationBar;