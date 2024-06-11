import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { useAuth } from '@/context/auth-context';
import { NavLink } from "react-router-dom"
import { useState } from "react"
const formSchema = z.object({
    email: z.string().email({
        message: "Email không hợp lệ"
    }),
    password: z.string().min(6, {
        message: "Mật khẩu phải có ít nhất 6 ký tự"
    }),
});

const SignInPage = () => {
    const [loading, setLoading] = useState(false)
    const { login } = useAuth();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        await login(values.email, values.password).then(() => {
            console.log('Login success');
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className="w-full flex justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Đăng nhập</CardTitle>
                    <CardDescription>Hãy nhập email và mật khẩu của bạn</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
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

                            <Button disabled={loading} type="submit" className="bg-primary text-white py-2 rounded-lg">Đăng nhập</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <p>Chưa có tài khoản</p>
                    <NavLink to="/signup">
                        <Button variant="outline">Đăng ký ngay</Button>
                    </NavLink>
                </CardFooter>
            </Card>
        </div >
    );
}

export default SignInPage;