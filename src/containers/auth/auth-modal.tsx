"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Lock, Mail, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../icons/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Sign In / Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="p-8">
        <DialogHeader>
          <DialogTitle>Authentication</DialogTitle>
          <DialogDescription>
            Sign in to your account or create a new one.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function SignInForm() {
  return (
    <form className="space-y-4 px-2">
      <div className="space-y-4">
        <Label htmlFor="email">Email</Label>
        <Input
          startIcon={Mail}
          id="email"
          type="email"
          placeholder="mail@example.com"
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-4">
        <Label htmlFor="password">Password</Label>
        <Input startIcon={Lock} id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" className="w-full">
        <GoogleIcon className="mr-2 h-4 w-4" />
        Google
      </Button>
    </form>
  );
}

function SignUpForm() {
  return (
    <form className="space-y-4 px-2">
      <div className="space-y-4">
        <Label htmlFor="name">Name</Label>
        <Input
          startIcon={User}
          id="name"
          placeholder="John Doe"
          autoComplete="name"
          required
        />
      </div>
      <div className="space-y-4">
        <Label htmlFor="email">Email</Label>
        <Input
          startIcon={Mail}
          id="email"
          type="email"
          placeholder="mail@example.com"
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-4">
        <Label htmlFor="password">Password</Label>
        <Input startIcon={Lock} id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" className="w-full">
        <GoogleIcon className="mr-2 h-4 w-4" />
        Google
      </Button>
    </form>
  );
}
