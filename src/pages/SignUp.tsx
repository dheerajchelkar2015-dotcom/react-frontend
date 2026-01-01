import React, { useState } from "react";
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
import OAuth2Buttons from "@/components/OAuth2Buttons";

function SignUp() {

    const [data, setData] = useState<RegisterData>({
        name: "",
        email: "",
        password: "",
    });

    //const [loading, setLoading] = useState<boolean>(false);
    //const [error, setError] = useState(null);
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
                <Card className="
        max-w-xl mx-auto space-y-6 p-8 rounded-3xl
        bg-[#eaf0ec]
        shadow-[10px_10px_20px_#cfd8d3,-10px_-10px_20px_#ffffff]

        dark:bg-[#0f172a]
        dark:shadow-[10px_10px_20px_#020617,-10px_-10px_20px_#1f2933]
      ">
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
                                <Button className="
w-full bg-primary text-primary-foreground
rounded-xl font-semibold
          shadow-[6px_6px_12px_#cfd8d3,-6px_-6px_12px_#ffffff]
          hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]
            hover:bg-[#eaf0ec]
  hover:text-emerald-700

          dark:bg-white dark:text-emerald-400
dark:shadow-[6px_6px_14px_rgba(0,0,0,0.9),-6px_-6px_14px_rgba(255,255,255,0.08)]
dark:hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.85),inset_-4px_-4px_8px_rgba(255,255,255,0.15)]
          transition-all
        ">
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
                            <OAuth2Buttons/>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}

export default SignUp;