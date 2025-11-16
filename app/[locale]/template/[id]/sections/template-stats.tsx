import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Package, PackagePlus, Eye, Star } from "lucide-react";

export function TemplateStats() {
  return (
    <section className="mx-auto max-w-7xl border-y border-border/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
        {/* Creator */}
        <div className="text-center">
          <Avatar className="mx-auto">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-2 font-medium text-foreground">Matias Fernandez</p>
          <p className="text-sm text-gray-400">Creator</p>
        </div>

        {/* Release Date */}
        <div className="text-center">
          <Clock className="mx-auto h-10 w-10" />
          <p className="mt-2 font-medium text-foreground">Released</p>
          <p className="text-sm text-gray-400">Oct 15, 2024</p>
        </div>

        {/* Version */}
        <div className="text-center">
          <Package className="mx-auto h-10 w-10" />
          <p className="mt-2 font-medium text-foreground">Version</p>
          <p className="text-sm text-gray-400">v 2.4</p>
        </div>

        {/* Views */}
        <div className="text-center">
          <Eye className="mx-auto h-10 w-10" />
          <p className="mt-2 font-medium text-foreground">Views</p>
          <p className="text-sm text-gray-400">2 hours</p>
        </div>

        {/* Likes */}
        <div className="text-center">
          <Star className="mx-auto h-10 w-10" />
          <p className="mt-2 font-medium text-foreground">Likes</p>
          <p className="text-sm text-gray-400">0 stars</p>
        </div>
      </div>
    </section>
  );
}
