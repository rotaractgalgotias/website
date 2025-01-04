import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Galgotias Educational Institute of Technology, Greater Noida",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 97945-65358",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@rotaractgalgotias.org",
  },
  {
    icon: Clock,
    title: "Available Hours",
    content: "Anytime",
  },
];

export const FORM_FIELDS = [
  {
    name: "firstName" as const,
    label: "First name",
    placeholder: "Enter your first name",
    type: "text",
    className: "col-span-1",
  },
  {
    name: "lastName" as const,
    label: "Last name",
    placeholder: "Enter your last name",
    type: "text",
    className: "col-span-1",
  },
  {
    name: "email" as const,
    label: "Email",
    placeholder: "abc@gmail.com",
    type: "email",
    className: "col-span-2",
  },
  {
    name: "subject" as const,
    label: "Subject",
    placeholder: "How can we help?",
    type: "text",
    className: "col-span-2",
  },
] as const;
