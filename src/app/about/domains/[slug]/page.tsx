import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { FadeInWrapper } from "@/components/wrappers/FadeInWrapper";
import { ServerMDX } from "@/components/mdx/ServerMDX";
import { domains, type Domain } from "../../_component/About";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getDomainContent(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/domains", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  return { frontmatter, content };
}

export default async function DomainPage({ params }: Props) {
  const { slug } = await params;

  const mdxData = await getDomainContent(slug);

  // Find the domain metadata from the constant (for fallback/icons)
  const domain = domains.find(
    (d: Domain) => d.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!domain) {
    // If domain isn't in the static list, we consider it 404 even if MDX exists?
    // Or we rely on MDX? Original code required 'domain' to exist.
    // Original code: if (!domain) return <NotFoundUI />
    // We'll stick to that.

    return (
      <MaxWidthWrapper className="py-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Domain not found</p>
            <div className="mt-4 text-center">
              <Link href="/about">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to About
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    );
  }

  const Icon = domain.icon;

  return (
    <div className="min-h-screen bg-background">
      <MaxWidthWrapper className="py-8">
        <FadeInWrapper className="space-y-8">
          <Card className="border-none bg-background/50 shadow-none">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold tracking-tight">
                {mdxData?.frontmatter.title || domain.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mdxData ? (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    {mdxData.frontmatter.author && (
                      <p className="text-sm text-muted-foreground">
                        By {mdxData.frontmatter.author}
                      </p>
                    )}
                    {mdxData.frontmatter.date && (
                      <p className="text-sm text-muted-foreground">
                        Last updated:{" "}
                        {new Date(mdxData.frontmatter.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="mt-6">
                    <ServerMDX source={mdxData.content} />
                  </div>
                </div>
              ) : (
                // Fallback
                <>
                  <p className="text-lg text-muted-foreground">
                    {domain.description}
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Activities</h3>
                    <ul className="space-y-2">
                      {domain.activities.map(
                        (activity: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-muted-foreground"
                          >
                            <span className="text-primary">•</span>
                            <span>{activity}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </FadeInWrapper>
      </MaxWidthWrapper>
    </div>
  );
}
