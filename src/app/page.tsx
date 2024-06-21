import SocialLink from "@/components/social-link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<main className="flex max-w-screen-md mx-auto flex-col">
			<section className="container flex flex-col justify-center px-4 gap-3 mt-40">
				<h1 className="font-bold text-5xl">Manuel Lostaló</h1>
				<p className="text-2xl">
					<b className="text-blue-900">Desarrollador fullstack</b> y estudiante de Ingeniería en Informática
				</p>
				<p>📍Buenos Aires, Argentina</p>
				<div className="flex gap-2 flex-wrap">
					<SocialLink icon={<FaGithub size={20} />} name="Github" url="https://github.com/ManuLosta" />
					<SocialLink icon={<FaEnvelope size={20} />} name="mlostalom@gmail.com" url="mailto:mlostalom@gmail.com" />
					<SocialLink icon={<FaLinkedin size={20} />} name="LinkeIn" url="https://www.linkedin.com/in/manuel-lostal%C3%B3-7b2b3a1ba/" />
				</div>
			</section>
			<section className="container flex flex-col justify-center px-4 gap-3 mt-10">
				<h1 className="font-bold text-2xl">Sobre mí</h1>
				<p className="text-lg">
					Me llamo <b className="text-blue-900">Manuel Lostaló</b>, soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Con experiencia en múltiples lenguajes de programación y tecnologías, me dedico a desarrollar <b className="text-blue-900">aplicaciones aplicaciones web únicas</b>, enfocándome en el diseño y en la experiencia del usuario.
				</p>
			</section>
		</main>
	);
}
