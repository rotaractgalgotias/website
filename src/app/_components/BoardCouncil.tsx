import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

const boardMembers = [
  {
    name: "Rtr. Divyanshu Katiyar",
    position: "President",
    image: "/placeholder.svg",
  },
  {
    name: "Rtr. Areeb ur Rub",
    position: "Secretary",
    image: "/placeholder.svg",
  },
  {
    name: "Rtr. Anurag Kaushik",
    position: "Vice President",
    image: "/placeholder.svg",
  },
  {
    name: "Rtr. Yash Gupta",
    position: "Sergeant-at-Arms",
    image: "/placeholder.svg",
  },
  {
    name: "Rtr. Ritik Varshney",
    position: "Joint Secretary",
    image: "/placeholder.svg",
  },
  {
    name: "Rtr. Bhavya Sinha",
    position: "Treasurer",
    image: "/placeholder.svg",
  },
  {
    name: "Rtr. Sanket Gupta",
    position: "Public Relation Officer",
    image: "/placeholder.svg",
  },
];

export default function BoardCouncil() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-12">
        Board Council 2024-25
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
        {boardMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.position}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex -space-x-4">
          {[...Array(8)].map((_, i) => (
            <Avatar key={i} className="w-10 h-10 border-2 border-background">
              <AvatarImage
                src="/placeholder.svg"
                alt={`Team member ${i + 1}`}
              />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
          ))}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-muted text-sm">
            +20
          </div>
        </div>
        <Button variant="link" className="text-primary">
          View Full RcGEI Team
        </Button>
      </div>
    </section>
  );
}
