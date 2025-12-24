import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  link: string;
}

const ArticleCard = ({ image, date, title, link }: ArticleCardProps) => {
  return (
    <div className="bg-card border border-border overflow-hidden group animate-fade-in">
      <div className="aspect-[4/3] bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-2">{date}</p>
        <h3 className="font-serif text-lg text-primary mb-4 leading-snug">
          {title}
        </h3>
        <Link 
          to={link}
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-amber-hover transition-colors"
        >
          Read more <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
