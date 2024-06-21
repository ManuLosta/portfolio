import Link from "next/link";

export default function SocialLink({ url, icon, name }: { url: string, icon: React.ReactNode, name: string }) {
	return (
		<Link href={url} target="_blank" className="rounded-full border flex items-center gap-1 p-2 border-neutral-400 dark:border-neutral-700 hover:bg-neutral-200 hover:scale-105 transition-all">
			{icon} {name}
		</Link>
	)
}
