"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { motion } from "framer-motion";
import { domains, type Domain } from "../../_component/About";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface DomainContent {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    author: string;
  };
}

export default function DomainPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [mdxContent, setMdxContent] = useState<DomainContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Find the domain that matches the slug
  const domain = domains.find(
    (d: Domain) => d.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  useEffect(() => {
    const fetchMdxContent = async () => {
      try {
        const response = await fetch(`/api/domains/${slug}`);
        if (!response.ok) throw new Error("Failed to fetch MDX content");
        const data = await response.json();
        setMdxContent(data);
      } catch (error) {
        console.error("Error fetching MDX content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (domain) {
      fetchMdxContent();
    }
  }, [slug, domain]);

  if (!domain) {
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <Link href="/about">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About
              </Button>
            </Link>
          </div>

          <Card className="border-none bg-background/50 shadow-none">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold tracking-tight">
                {mdxContent?.frontmatter.title || domain.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              ) : mdxContent ? (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    {mdxContent.frontmatter.author && (
                      <p className="text-sm text-muted-foreground">
                        By {mdxContent.frontmatter.author}
                      </p>
                    )}
                    {mdxContent.frontmatter.date && (
                      <p className="text-sm text-muted-foreground">
                        Last updated: {new Date(mdxContent.frontmatter.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="mt-6">
                    <MDXRemote {...mdxContent.content} />
                  </div>
                </div>
              ) : (
                // Fallback to domain data if MDX content is not available
                <>
                  <p className="text-lg text-muted-foreground">
                    {domain.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Activities</h3>
                    <ul className="space-y-2">
                      {domain.activities.map((activity: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-muted-foreground"
                        >
                          <span className="text-primary">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
} 