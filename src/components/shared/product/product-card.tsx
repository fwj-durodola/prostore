import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "../../../../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            width={300}
            height={300}
            priority={true}
            alt={product.slug}
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="p-4 grid gap-4">
          <div className="text-xs">{product.brand}</div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-md font-medium">{product.name}</h2>
          </Link>
          <div className="flex-between gap-4">
            <p>{product.rating} Stars</p>
            {product.stock > 0 ? (
              <ProductPrice price={product.price} className="font-bold" />
            ) : (
              <p className="text-destructive">Out of Stock</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
