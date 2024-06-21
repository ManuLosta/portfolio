import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/util/cn";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Manuel Lostaló",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={cn(spaceGrotesk.className, "bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100")}>
				{children}
			</body>
		</html>
	);
}
