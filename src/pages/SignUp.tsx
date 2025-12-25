import React, { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import { registerUser } from "@/services/AuthService";
import { useNavigate } from "react-router";

function SignUp() {

    const [data, setData] = useState<RegisterData>({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.name)
        //console.log(event.target.value);
        setData(value => ({
            ...value,
            [event.target.name]: event.target.value,
        }))
    };

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(data);

        if (data.name.trim() === "") {
            toast.error("Name is Required !!");
            return;
        }

        if (data.email.trim() === "") {
            toast.error("Email is Required !!");
            return;
        }

        if (data.password.trim() === "") {
            toast.error("Password is Required !!");
            return;
        }

        try {
            const result = await registerUser(data);
            console.log(result);
            toast.success("User Registerd Successfully");
            setData({
                name: "",
                email: "",
                password: "",
            });
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("Error in Registering User")
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background px-4 overflow-hidden">
            {/* BACKGROUND GLOW */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 -z-10"
            >
                <div className="absolute top-1/3 left-1/4 h-72 w-72 bg-primary/20 blur-3xl rounded-full" />
                <div className="absolute bottom-1/4 right-1/3 h-72 w-72 bg-primary/10 blur-3xl rounded-full" />
            </motion.div>

            {/* SIGNUP CARD */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md"
            >
                <Card className="bg-card/80 backdrop-blur-xl border-border shadow-2xl rounded-2xl">
                    <CardContent className="p-8">
                        {/* HEADING */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-3xl font-bold tracking-tight">Create Your Account</h1>
                            <p className="mt-2 text-muted-foreground">
                                Join us and start building futuristic experiences today
                            </p>
                        </motion.div>

                        <form onSubmit={handleFormSubmit}>

                            {/* NAME */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-2 mb-4"
                            >
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" type="text" placeholder="John Doe" name="name" value={data.name} onChange={handleInputChange} />
                            </motion.div>

                            {/* EMAIL */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-2 mb-4"
                            >
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" name="email" value={data.email} onChange={handleInputChange} />
                            </motion.div>

                            {/* PASSWORD */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-2 mb-6"
                            >
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="••••••••" name="password" value={data.password} onChange={handleInputChange} />
                            </motion.div>

                            {/* SIGNUP BUTTON */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold">
                                    Create Account
                                </Button>
                            </motion.div>

                            {/* DIVIDER */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="my-6 flex items-center gap-4"
                            >
                                <Separator className="flex-1" />
                                <span className="text-xs text-muted-foreground">OR</span>
                                <Separator className="flex-1" />
                            </motion.div>

                            {/* GOOGLE SIGNUP */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Button
                                    variant="outline"
                                    className="w-full flex items-center gap-2 justify-center hover:scale-[1.02] transition-transform"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        className="h-5 w-5"
                                    >
                                        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.1 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.3 2.9l5.7-5.7C33.7 7.1 29 5 24 5 12.4 5 3 14.4 3 26s9.4 21 21 21c11.5 0 20.6-8.1 20.6-21 0-1.4-.1-2.7-.4-3.5z" />
                                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.8 0 5.4 1.1 7.3 2.9l5.7-5.7C33.7 7.1 29 5 24 5c-7.8 0-14.5 4.2-18.7 9.7z" />
                                        <path fill="#4CAF50" d="M24 47c5.3 0 10.2-2 13.9-5.2l-6.4-5.2C29.6 38.2 26.9 39 24 39c-5.3 0-9.8-3.6-11.4-8.5l-6.5 5C10.2 42.4 16.6 47 24 47z" />
                                        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.5-6.1 6.6l6.4 5.2c-.5.4 8.9-6.5 8.9-18.8 0-1.4-.1-2.7-.4-3.5z" />
                                    </svg>
                                    Continue with Google
                                </Button>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}

export default SignUp;