import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MandateCardProps {
  image: string;
  title: string;
  description: string;
  buttonLink?: string;
}

const MandateCard = ({ image, title, description, buttonLink = "#" }: MandateCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1">
      {/* Image at top */}
      <div className="aspect-[16/9] bg-muted overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        {/* Title - bold dark blue */}
        <h3 className="font-sans text-lg md:text-xl font-bold text-primary mb-4 md:mb-6 leading-tight">
          {title}
        </h3>
        
        {/* Description - only show if provided */}
        {description && (
          <p className="text-muted-foreground text-sm flex-1 mb-4 md:mb-6 leading-relaxed font-sans">
            {description}
          </p>
        )}
        
        {/* Button at bottom - dark blue with white text */}
        <div className="mt-auto">
          <Button variant="default" className="w-full rounded-md font-sans font-medium text-sm md:text-base" asChild>
            <Link to={buttonLink}>KNOW MORE</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MandateCard;

