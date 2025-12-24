import { Globe, Shield } from "lucide-react";

const Logo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-primary";
  const iconColor = variant === "light" ? "text-accent" : "text-accent";
  const iconBorderColor = variant === "light" ? "border-accent" : "border-accent";
  
  return (
    <div className="flex items-center gap-4">
      <div className={`relative ${iconColor} p-2 border-2 ${iconBorderColor} rounded-lg`}>
        <Globe className="w-8 h-8" strokeWidth={1.5} />
        <Shield className="w-4 h-4 absolute -bottom-1 -right-1 bg-primary rounded-sm p-0.5" strokeWidth={1.5} />
      </div>
      <div className={`${textColor}`}>
        <div className="font-serif text-xl font-bold leading-tight">ISII</div>
        <div className="text-[10px] leading-tight tracking-wider uppercase opacity-80">
          Institute for<br />
          Strategic Intelligence<br />
          and Intervention
        </div>
      </div>
    </div>
  );
};

export default Logo;
