import React from "react";
import Newsletter from "./_components/Newsletter";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { prisma } from "@/lib/prisma";
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
    <div className="min-h-screen w-full overflow-hidden bg-background">
      <MaxWidthWrapper className="py-6 lg:py-12">
        <div className="w-full h-full flex justify-center items-center">
          <Newsletter newsletter={newsletter} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
