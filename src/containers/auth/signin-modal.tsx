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
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import GoogleIcon from "@/containers/icons/google";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export default function AuthModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Sign In <LogIn />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-8">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>Sign in to your account.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="signin" className="w-full">
          <TabsContent value="signin">
            <SignInForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function SignInForm() {
  async function handleEmailMagicLink(formData: FormData) {
    const email = formData.get("email") as string;
    await signIn("magic-link", { email });
  }

  return (
    <div className="space-y-4 px-2">
      <form action={handleEmailMagicLink} className="space-y-4">
        <div className="space-y-4">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="mail@example.com"
            autoComplete="email"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign In with Email Magic Link
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
      </form>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signIn("google")}
      >
        <GoogleIcon className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
}
