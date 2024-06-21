import Link from "next/link";

export default function SocialLink({ url, icon, name }: { url: string, icon: React.ReactNode, name: string }) {
	return (
		<Link href={url} target="_blank" className="rounded-full border flex items-center gap-1 p-2 border-neutral-400 hover:bg-slate-800 hover:text-neutral-100 transition-all">
			{icon} {name}
		</Link>
	)
}
