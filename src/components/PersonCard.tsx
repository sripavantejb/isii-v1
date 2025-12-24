interface PersonCardProps {
  category: string;
  name: string;
  title: string;
  description: string;
}

const PersonCard = ({ category, name, title, description }: PersonCardProps) => {
  return (
    <div className="bg-card p-6 border-l-4 border-l-accent border-t border-r border-b border-border animate-fade-in h-full flex flex-col">
      <p className="text-xs text-accent font-medium uppercase tracking-wider mb-3">
        {category}
      </p>
      
      <h3 className="font-serif text-xl text-primary mb-2">{name}</h3>
      
      <p className="text-sm text-muted-foreground mb-4 flex-grow">
        {title}
      </p>
      
      <p className="text-sm text-accent">
        {description}
      </p>
    </div>
  );
};

export default PersonCard;
