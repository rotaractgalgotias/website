import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { FORM_FIELDS } from "../constants";
import Image from "next/image";

interface ContactFormProps {
  isSubmitting: boolean;
  submitSuccess: boolean;
  setIsSubmitting: (value: boolean) => void;
  setSubmitSuccess: (value: boolean) => void;
}

export function ContactForm({
  isSubmitting,
  submitSuccess,
  setIsSubmitting,
  setSubmitSuccess,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <Card className="border-none shadow-lg mt-8">
        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold">Send us a Message</h2>
                <p className="text-gray-500">
                  Have questions? We&apos;re here to help.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {FORM_FIELDS.map((field) => (
                    <div
                      key={field.name}
                      className={`space-y-2 ${field.className}`}
                    >
                      <label
                        htmlFor={field.name}
                        className="text-sm font-medium"
                      >
                        {field.label}
                      </label>
                      <Input
                        id={field.name}
                        type={field.type}
                        {...register(field.name)}
                        placeholder={field.placeholder}
                        className={errors[field.name] ? "border-red-500" : ""}
                      />
                      {errors[field.name] && (
                        <p className="text-sm text-red-500">
                          {errors[field.name]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    className={`min-h-[150px] ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your interest in Rotaract..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-[#0066cc] hover:bg-[#0052a3]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>

                {submitSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.p>
                )}
              </form>
            </div>

            <motion.div
              className="relative h-full min-h-[400px] rounded-lg overflow-hidden bg-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Image
                src="/contact.jpg"
                alt="Location map"
                fill
                className="absolute inset-0 w-full h-full object-cover shadow-md"
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
