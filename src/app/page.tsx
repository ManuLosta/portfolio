import SocialLink from "@/components/social-link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<main className="flex min-h-screen max-w-screen-md mx-auto flex-col items-center justify-between">
			<section className="container flex flex-col justify-center h-screen px-4 gap-3">
				<h1 className="font-bold text-5xl">Manuel Lostaló</h1>
				<p className="text-2xl">
					<b>Desarrollador fullstack</b> y estudiante de Ingeniería en Informática
				</p>
				<p>📍Buenos Aires, Argentina</p>
				<div className="flex gap-2">
					<SocialLink icon={<FaGithub size={20} />} name="Github" url="https://github.com/ManuLosta" />
					<SocialLink icon={<FaEnvelope size={20} />} name="mlostalom@gmail.com" url="mailto:mlostalom@gmail.com" />
					<SocialLink icon={<FaLinkedin size={20} />} name="LinkeIn" url="https://www.linkedin.com/in/manuel-lostal%C3%B3-7b2b3a1ba/" />
				</div>
			</section>
			<section>

			</section>
		</main>
	);
}
