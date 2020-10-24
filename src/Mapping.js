const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
  ]

  const Skill=({skill:[tech, level]})=>(
      <div>
<li>{tech} {level}</li>
      </div>
  )

  const Skills = ({skills})=>(
const skillList =(skills.map((skill)=><Skill skill={skill}/>))
  )