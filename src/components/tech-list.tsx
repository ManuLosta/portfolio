import { RiJavaFill, RiJavascriptFill, RiNextjsFill } from "react-icons/ri"
import TechBadge from "./tech-badge"
import { FaLinux, FaPython, FaReact } from "react-icons/fa6"
import { SiGnubash, SiMongodb, SiSpring, SiTypescript } from "react-icons/si"
import { TbBrandKotlin, TbSql } from "react-icons/tb"

const techs = [
	{
		name: "NextJS",
		icon: <RiNextjsFill />
	},
	{
		name: "Javascript",
		icon: <RiJavascriptFill />
	},
	{
		name: "Typescript",
		icon: <SiTypescript />
	},
	{
		name: "Java",
		icon: <RiJavaFill />
	},
	{
		name: "Python",
		icon: <FaPython />
	},
	{
		name: "Spring",
		icon: <SiSpring />
	},
	{
		name: "SQL",
		icon: <TbSql />
	},
	{
		name: "MongoDB",
		icon: <SiMongodb />
	},
	{
		name: "Kotlin",
		icon: <TbBrandKotlin />
	},
	{
		name: "Bash",
		icon: <SiGnubash />
	},
	{
		name: "Linux",
		icon: <FaLinux />
	},
	{
		name: "React",
		icon: <FaReact />
	}
]

export default function TechList() {
	return (
		<div className="flex flex-wrap mb-20 gap-3 items-center justify-center mt-5">
			{
				techs.map((tech, index) => (
					<TechBadge key={index} name={tech.name} icon={tech.icon} />
				))
			}
		</div>
	)
}
