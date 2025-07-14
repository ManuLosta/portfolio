import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ResumeAvatarProps {
  logoUrl: string;
  altText: string;
}

export default function ResumeAvatar({ logoUrl, altText }: ResumeAvatarProps) {
  return (
    <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
      <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
      <AvatarFallback>{altText[0]}</AvatarFallback>
    </Avatar>
  );
}
