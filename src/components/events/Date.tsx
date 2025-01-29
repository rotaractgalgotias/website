"use client";

import { CalendarIcon } from "lucide-react";

/**
 * Props for the DateDisplay component
 */
type DateDisplayProps = {
  /**
   * Date to be displayed
   */
  date: Date;
};

/**
 * Component that displays a date with a calendar icon
 * @param props - Component properties
 * @returns JSX element displaying the date with an icon
 */
export function DateDisplay({ date }: DateDisplayProps): JSX.Element {
  return (
    <div className="flex items-center justify-center w-fit">
      <CalendarIcon className="h-5 w-5 text-primary mr-2" />
      <div>
        <span className="block font-medium text-muted-foreground">Date</span>
        <span>{date.toLocaleDateString()}</span>
      </div>
    </div>
  );
}
