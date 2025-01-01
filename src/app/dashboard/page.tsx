import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";
import { getDB } from "@/db";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { users } from "@/db/schema";

async function updateProfile(formData: FormData) {
  "use server";
  
  const session = await auth();
  if (!session?.user?.id) return;

  const name = formData.get("name") as string;
  const image = formData.get("image") as string;

  const db = getDB(getRequestContext().env.DB);
  await db.update(users)
    .set({ 
      name: name || session.user.name,
      image: image || session.user.image
    })
    .where(eq(users.id, session.user.id));

  revalidatePath("/dashboard");
}

const DashboardPage = async () => {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="border shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20 border-2 border-primary">
                <AvatarImage src={session.user.image || ""} alt={session.user.name || "User"} />
                <AvatarFallback className="bg-primary/10">{session.user.name?.[0]?.toUpperCase() || "U"}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">{session.user.name || "Welcome!"}</CardTitle>
                <CardDescription className="text-muted-foreground">{session.user.email}</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Edit Profile</CardTitle>
            <CardDescription>
              Update your profile information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={updateProfile} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={session.user.name || ""}
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image" className="text-sm font-medium">Profile Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  defaultValue={session.user.image || ""}
                  placeholder="Enter image URL"
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
