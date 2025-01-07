import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { currentYear } from "@/lib/utils";
import Newsletter from "./_components/NewsletterPage";

export const metadata: Metadata = {
    title: "Newsletter",
    openGraph: {
        description:
            "Explore our archive of past newsletters. Discover the impact we've made in our community over the years.",
    },
};

export default async function page() {
    const newslettes = await prisma.newsletter.findMany()

    return (
        <div>
            <Newsletter newsletters={newslettes} />
        </div>
    );
}
