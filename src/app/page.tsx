import { PageWrapper } from "@/components/page-wrapper";
import SocialLink from "@/components/social-link";
import TechList from "@/components/tech-list";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuArrowDown } from "react-icons/lu";

export default function Home() {
	return (
		<PageWrapper>
			<main className="flex flex-col">
				<section className="relative flex flex-col justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
					<div className="max-w-screen-md flex flex-col mx-auto px-4 gap-3">
						<h1 className="font-bold text-5xl">Manuel Lostaló</h1>
						<p className="text-2xl">
							<b className="text-blue-900 dark:text-blue-500">Desarrollador fullstack</b> y estudiante de Ingeniería en Informática
						</p>
						<p>📍Buenos Aires, Argentina</p>
						<div className="flex gap-4 flex-wrap">
							<SocialLink icon={<FaGithub size={20} />} name="Github" url="https://github.com/ManuLosta" />
							<SocialLink icon={<FaEnvelope size={20} />} name="mlostalom@gmail.com" url="mailto:mlostalom@gmail.com" />
							<SocialLink icon={<FaLinkedin size={20} />} name="LinkeIn" url="https://www.linkedin.com/in/manuel-lostal%C3%B3-7b2b3a1ba/" />
						</div>
					</div>
					<LuArrowDown className="absolute bottom-10 left-[calc(50%-15px)]" size={30} />
				</section>
				<section className="max-w-screen-md mx-auto flex flex-col justify-center px-4 gap-3 mt-10">
					<h1 className="font-bold text-2xl">Sobre mí</h1>
					<p className="text-lg">
						Me llamo <b className="text-blue-900 dark:text-blue-500">Manuel Lostaló</b>, soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Con experiencia en múltiples lenguajes de programación y tecnologías, me dedico a desarrollar <b className="text-blue-900 dark:text-blue-500">aplicaciones aplicaciones web únicas</b>, enfocándome en el diseño y en la experiencia del usuario.
					</p>
					<TechList />
				</section>
			</main>
		</PageWrapper>
	);
}
