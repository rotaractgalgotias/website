import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retrieves the current year from the environment variable `CURRENT_YEAR`.
 * If the environment variable is not set, it defaults to the current year based on the system date.
 *
 * @constant {number} currentYear - The current year.
 */
export const currentYear =
  Number(process.env.CURRENT_YEAR) || new Date().getFullYear();
