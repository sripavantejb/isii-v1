interface EngagementCardProps {
  title: string;
  description: string;
}

const EngagementCard = ({ title, description }: EngagementCardProps) => {
  return (
    <div className="bg-card p-6 border-l-4 border-l-accent border-t border-r border-b border-border animate-fade-in">
      <h3 className="font-serif text-xl text-primary mb-3">{title}</h3>
      
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default EngagementCard;
