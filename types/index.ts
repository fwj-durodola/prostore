import { insertProductSchema } from "@/lib/validator";
import { z } from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  createdAt: Date;
  rating: string;
  numReviews: number;
};

// export type Product = {
//   name: string;
//   slug: string;
//   category: string;
//   brand: string;
//   description: string;
//   stock: string;
//   images: string;
//   isFeatured: string;
//   banner: string;
//   price: string;
//   id: string;
//   createdAt: Date;
//   rating: string;
//   numReviews: number;
// };
