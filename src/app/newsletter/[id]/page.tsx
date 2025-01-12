import React from "react";
import Newsletter from "./_components/Newsletter";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { prisma } from "@/lib/prisma";
import { Download, Share2 } from "lucide-react";
type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const paramsStore = await params;
  const id = paramsStore.id;
  const newsletter = await prisma.newsletter.findUnique({
    where: {
      id,
    },
  });
  

  if (!newsletter) {
    return <div>Newsletter not found</div>;
  }


  return (
    <div className="w-full overflow-hidden bg-background">
      <MaxWidthWrapper>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Newsletter newsletter={newsletter} />
          
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
