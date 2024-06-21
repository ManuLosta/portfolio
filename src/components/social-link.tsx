import Link from "next/link";

export default function SocialLink({ url, icon, name }: { url: string, icon: React.ReactNode, name: string }) {
	return (
		<Link href={url} className="rounded-full border flex items-center gap-1 p-2 border-neutral-400">
			{icon} {name}
		</Link>
	)
}
