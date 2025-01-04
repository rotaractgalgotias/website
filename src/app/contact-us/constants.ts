import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Galgotias Educational Institutions Campus, Greater Noida",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 123 456 7890",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "rotaract@galgotias.edu",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday\n9:00 AM - 5:00 PM",
  },
];

export const FORM_FIELDS = [
  {
    name: "firstName" as const,
    label: "First name",
    placeholder: "John",
    type: "text",
    className: "col-span-1",
  },
  {
    name: "lastName" as const,
    label: "Last name",
    placeholder: "Doe",
    type: "text",
    className: "col-span-1",
  },
  {
    name: "email" as const,
    label: "Email",
    placeholder: "john@example.com",
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
