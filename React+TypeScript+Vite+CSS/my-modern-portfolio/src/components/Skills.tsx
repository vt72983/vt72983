const skillsList: string[] = [
  'Анализ защищенности', 'Сетевая безопасность', 'Мобильная безопасность', 'IoT-безопасность',
  'Reverse Engineering', 'Облачная безопасность', 'Безопасность БД', 'Безопасность контейнеров',
  'Микросервисы', 'Linux Security', 'Windows Security', 'ML-безопасность', 'Linux', 'Python', 'C++',
  'JavaScript', 'PHP', 'Flutter', 'React', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'Ruby', 'Go',
  'Rust', 'IDA Pro', 'Ghidra', 'Radare2', 'Binary Ninja', 'Angr', 'Android security', 'Bash', 'Nmap',
  'Wireshark', 'Burp Suite', 'Metasploit', 'Docker', 'SIEM', 'Git'
];


const Skills = () => {
  return (
    <section id="skills" className="page-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="section-content">
        <h2 className="text-center justify-content-center"><i className="fas fa-tools"></i>Экспертиза и Инструменты</h2>
        <div className="skills-container">
          <ul className="skills-list">
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;