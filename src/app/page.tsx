import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudIcon, CodeIcon, GlobeIcon, ZapIcon } from "lucide-react";

import { auth } from "@/auth";

export const runtime = "edge";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1  flex flex-col">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome {session?.user?.name} to Cloudflare Next.js Template
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
                  Jumpstart your web projects with the power of Cloudflare and
                  Next.js. Fast, secure, and scalable.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <ZapIcon className="w-14 h-14 mb-4" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Experience blazing-fast load times with Cloudflare&apos;s
                    global CDN.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CodeIcon className="w-14 h-14 mb-4" />
                  <CardTitle>Next.js Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Leverage the latest Next.js features for optimal performance
                    and developer experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CloudIcon className="w-14 h-14 mb-4" />
                  <CardTitle>Cloudflare Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Seamlessly deploy and scale your applications on
                    Cloudflare&apos;s network.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <GlobeIcon className="w-14 h-14 mb-4" />
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Deliver your content quickly to users worldwide with edge
                    computing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
