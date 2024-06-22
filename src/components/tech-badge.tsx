export default function TechBadge({ icon, name }: { icon: React.ReactNode, name: string }) {
	return (
		<div className="flex gap-2 items-center p-2 border rounded-full">
			{icon}
			{name}
		</div>
	)
}
