import React from "react";

interface ButtonProps extends React.PropsWithChildren {
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({ icon: Icon, children }) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
      <div className="flex gap-1">
        {Icon && (
          <span className="flex justify-center items-center">
            <Icon />
          </span>
        )}
        <span className="flex justify-center items-center">{children}</span>
      </div>
    </button>
  );
};

export default Button;
