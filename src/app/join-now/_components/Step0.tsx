import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Step0({
  colleges,
  setCollegeId,
  setCurrentStep,
}: {
  colleges: { id: string; name: string }[];
  setCollegeId: (id: string) => void;
  setCurrentStep: (step: number) => void;
}) {
  return (
    <div className="space-y-4">
      {colleges.map((club) => (
        <div
          key={club.id}
          className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 hidden lg:flex">
              {/* <AvatarImage src={club.image} alt={club.name} /> */}
              <AvatarFallback>
                {club.name.trim() ===
                "Galgotias College of Engineering and Technology"
                  ? "GCET"
                  : "GU"}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{club.name}</h3>
              <p className="text-sm text-muted-foreground">
                {club.name.trim() ===
                "Galgotias College of Engineering and Technology"
                  ? 120
                  : 100}
              </p>
            </div>
          </div>
          <Button
            onClick={() => {
              setCollegeId(club.id);
              setCurrentStep(1);
            }}
          >
            Join
          </Button>
        </div>
      ))}
    </div>
  );
}
