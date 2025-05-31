import { NextResponse } from "next/server";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const filePath = path.join(process.cwd(), "src/content/domains", `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Domain content not found", { status: 404 });
    }

    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    // Parse frontmatter and content
    const { data: frontmatter, content } = matter(fileContent);
    
    // Serialize the MDX content
    const mdxSource = await serialize(content);

    return NextResponse.json({
      content: mdxSource,
      frontmatter,
    });
  } catch (error) {
    console.error("Error reading domain content:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 