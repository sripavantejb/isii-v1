const Logo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const logoImage = "https://res.cloudinary.com/dqataciy5/image/upload/v1767357710/Link_1_jqegrc.png";
  
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="ISII Logo" 
        className="h-12 object-contain"
      />
    </div>
  );
};

export default Logo;
