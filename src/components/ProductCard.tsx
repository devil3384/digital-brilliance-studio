import { Star } from "lucide-react";
import { formatINR, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-hover group overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={816}
          height={816}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 font-display text-lg leading-snug text-card-foreground">{product.name}</h3>
        <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-gold text-gold" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>· demo rating</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">{formatINR(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatINR(product.originalPrice)}</span>
          )}
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Add to Cart (Demo)
        </button>
      </div>
    </article>
  );
}
