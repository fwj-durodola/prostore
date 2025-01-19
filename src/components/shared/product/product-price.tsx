import { cn } from "@/lib/utils";

const ProductPrice = ({
  price,
  className,
}: {
  price: number;
  className?: string;
}) => {
  const priceDecimal = price.toString();
  const [priceInt, priceDec] = priceDecimal.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {priceInt}
      <span className="text-xs align-super">.{priceDec}</span>
    </p>
  );
};

export default ProductPrice;
