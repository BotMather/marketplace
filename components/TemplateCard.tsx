import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";

interface TemplateCardProps {
  previuv: string;
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  category: string;
}

export const TemplateCard = ({
  previuv,
  id,
  title,
  description,
  price,
  features,
  category,
}: TemplateCardProps) => {
  const templateId = id;
  return (
    <Card className="group flex h-full flex-col overflow-hidden bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      {/* Template Preview Area */}
      <div
        style={{ backgroundImage: `url("${previuv}")` }}
        className="bg-gradient relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border-b border-border/50 bg-cover bg-center"
      >
        <Badge
          variant="secondary"
          className="absolute right-3 top-3 text-xs font-medium"
        >
          {category}
        </Badge>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <ul className="space-y-2">
          {features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Bot className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/60" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border/50 pt-4">
        <div>
          <span className="text-2xl font-bold">{price}</span>
          <span className="ml-1 text-xs text-muted-foreground">bir marta</span>
        </div>
        <Link href={`/template/${templateId}`}>
          <Button size="sm" className="group-hover:shadow-md">
            Ko'rish
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
