"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  year: z.string(),
  branch: z.string().min(2, "Please enter your branch"),
  whatsappNumber: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  callingNumber: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  referral: z.string().min(2, "Please enter your referral source"),
});

export default function Step1({
  formData,
  setFormData,
  setCurrentStep,
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
  setFormData: (formData: {
    email: string;
    name: string;
    year: string;
    branch: string;
    whatsappNumber: string;
    callingNumber: string;
    referral: string;
  }) => void;
  setCurrentStep: (step: number) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      year: "",
      branch: "",
      whatsappNumber: "",
      callingNumber: "",
      referral: "",
    },
    values: formData,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    setCurrentStep(2);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input placeholder="YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your branch" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsappNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter WhatsApp number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="callingNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Calling Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter calling number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referral"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Referral Source</FormLabel>
                <FormControl>
                  <Input placeholder="How did you hear about us?" {...field} />
                </FormControl>
                <FormDescription>
                  You can mention social media or the person who referred you
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Next
        </Button>
      </form>
    </Form>
  );
}
