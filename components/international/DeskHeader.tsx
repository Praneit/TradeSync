import { ReactNode } from "react";

interface DeskHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export const DeskHeader = ({ title, subtitle, icon }: DeskHeaderProps) => {
  return (
    <div className="flex items-start gap-4">
      {icon && <div className="mt-1">{icon}</div>}
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
