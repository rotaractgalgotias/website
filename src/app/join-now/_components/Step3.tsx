"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  confirmInformation: z.boolean().refine((value) => value === true, {
    message: "You must confirm that the information is correct",
  }),
});

export default function Step3({
  formData,
  membershipDetails,
  handleSubmit,
}: {
  formData: {
    email: string;
    name: string;
    year: string;
    branch: string;
    whatsappNumber: string;
    callingNumber: string;
    referral: string;
  };
  membershipDetails: {
    membershipType: string;
    agreeToTerms: boolean;
  };
  handleSubmit: () => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      confirmInformation: false,
    },
    values: {
      confirmInformation: false,
    },
  });

  function onSubmit() {
    handleSubmit();
  }
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-medium">Personal Information</h3>
        <p className="text-sm capitalize">Name: {formData.name}</p>
        <p className="text-sm">Email: {formData.email}</p>
        <p className="text-sm capitalize">Year: {formData.year}</p>
        <p className="text-sm capitalize">Branch: {formData.branch}</p>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Contact Information</h3>
        <p className="text-sm capitalize">
          WhatsApp Number: {formData.whatsappNumber}
        </p>
        <p className="text-sm capitalize">
          Calling Number: {formData.callingNumber}
        </p>
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">Membership Details</h3>
        <p className="text-sm capitalize">
          Membership Type: {membershipDetails.membershipType}
        </p>
        <p className="text-sm capitalize">
          Referral Source: {formData.referral}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="confirmInformation"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I confirm that all the information provided is correct
                  </FormLabel>
                  <FormDescription>
                    By checking this box, you agree that the information above
                    is accurate and complete.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            <Check className="w-4 h-4 mr-2" />
            Complete Registration
          </Button>
        </form>
      </Form>
    </div>
  );
}
