import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CheckIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Step4({
  whatsappGroupLink,
}: {
  whatsappGroupLink: string;
}) {
  return (
    <div className="space-y-6">
      <Alert>
        <CheckIcon className="h-4 w-4" />
        <AlertTitle>You&apos;re all set!</AlertTitle>
        <AlertDescription>
          Thank you for completing the registration process.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Next Steps:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Check your email for a welcome message</li>
          <li>Join our upcoming orientation session</li>
          <li>Explore volunteer opportunities</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">WhatsApp Updates Group</h3>
        <p>Stay connected with our community:</p>
        <Link href={whatsappGroupLink} target="_blank" className="block">
          <Button variant="outline" className="w-full">
            <ExternalLinkIcon className="w-4 h-4 mr-2" />
            Join WhatsApp Updates Group
          </Button>
        </Link>
      </div>
      <Link href={"/"} className="block">
        <Button variant="default" className="gap-2 w-full">
          Go to back to Home page
        </Button>
      </Link>
    </div>
  );
}
