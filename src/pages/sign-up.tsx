import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/auth-context";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    userName: z.string().min(3, {
        message: "Tên người dùng phải có ít nhất 3 ký tự"
    }),
    email: z.string().email({
        message: "Email không hợp lệ"
    }),
    phoneNumber: z.string().min(10, {
        message: "Số điện thoại phải có ít nhất 10 ký tự"
    }),
    password: z.string().min(6, {
        message: "Mật khẩu phải có ít nhất 6 ký tự"
    }).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
        "Mật khẩu phải chứa ít nhất một chữ thường, một chữ hoa, một chữ số và một ký tự đặc biệt"
    ),
    confirmPassword: z.string()
}).refine(data => data.confirmPassword === data.password, {
    message: "Mật khẩu không khớp",
    path: ['confirmPassword'], // Đặt lỗi trên trường `confirmPassword`
});

const SignUpPage = () => {
    const { register } = useAuth();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        register(values.userName, values.email, values.phoneNumber, values.password)
    }
    return (
        <div className="w-full flex justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Đăng ký</CardTitle>
                    <CardDescription>Hãy nhập email và mật khẩu của bạn</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                            <FormField
                                control={form.control}
                                name="userName"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel htmlFor="userName">Tên người dùng</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tên người dùng..." type="userName" id="userName" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Nhập tên người dùng của bạn ở đây.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email..." type="email" id="email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Nhập email của bạn ở đây.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel htmlFor="phoneNumber">Số điện thoại</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Số điện thoại..." type="phoneNumber" id="phoneNumber" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Nhập số điện thoại của bạn ở đây.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel htmlFor="password">Mật khẩu</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Mật khẩu..." type="password" id="password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Nhập mật khẩu của bạn ở đây.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel htmlFor="confirmPassword">Xác nhận mật khẩu</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nhập lại mật khẩu..." type="password" id="confirmPassword" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Nhập lại mật khẩu của bạn ở đây.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="bg-primary text-white py-2 rounded-lg">Đăng ký</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <p>Đã có tài khoản</p>
                    <NavLink to="/signin">
                        <Button variant="outline">Đăng nhập ngay</Button>
                    </NavLink>
                </CardFooter>
            </Card>
        </div >
    );
}

export default SignUpPage;