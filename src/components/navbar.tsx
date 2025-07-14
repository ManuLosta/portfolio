import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "./icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import cv from "@/data/cv.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
  X: Icons.x,
};


export default function NavBar() {
  return (
    <TooltipProvider>
      <div className="fixed inset-x-0 bottom-10 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <Dock direction="middle" className="rounded-full">
          {cv.basics.profiles?.map((profile) => {
            const Icon = iconMap[profile.network];
            if (!Icon) return null;

            return (
              <DockIcon key={profile.network}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="size-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{profile.network}</TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
        </Dock>
      </div>
    </TooltipProvider>
  );
}