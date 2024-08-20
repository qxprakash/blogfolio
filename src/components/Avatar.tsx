import React from "react";

interface AvatarProps {
  icon: React.ElementType;
  marginTop?: string; // Optional prop to control margin-top
}

const Avatar = ({ icon: Icon, marginTop = "mt-28" }: AvatarProps) => {
  return (
    <div className={`${marginTop} flex flex-col items-center`}>
      <div className="relative flex flex-col items-center">
        {/* Vertical line above the avatar with fade effect */}
        <div className="h-16 w-0.5 bg-gradient-to-b from-transparent to-blue-500"></div>

        <div className="bg-[#4a208a] p-4 rounded-full border-4 border-white/20 shadow-[20px_-20px_50px_rgb(255_255_255/0.5),-20px_-20px_80px_rgb(255_255_255/0.1),0_0_50px_rgb(140_69_255)]">
          <Icon className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
