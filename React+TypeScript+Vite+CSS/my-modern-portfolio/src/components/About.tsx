const About = () => {
  return (
    <section id="about-htb" className="page-section">
      <div className="section-content">
        <div className="row g-4">
          <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <div className="content-card h-100">
              <h2><i className="fas fa-user-secret"></i>Обо мне</h2>
              <p>
                Специализируюсь на анализе защищенности веб-приложений, сетевой безопасности, мобильной безопасности, IoT-безопасности, Reverse Engineering и многих других областях. Постоянно изучаю новые векторы атак и методы противодействия для защиты данных и инфраструктуры.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="1000">
            <div className="content-card project-card h-100">
              <h2><i className="fas fa-cube"></i>Hack The Box</h2>
              <div className="project">
                <h3>
                  <a href="https://app.hackthebox.com/users/1501105" target="_blank" rel="noopener noreferrer">
                    Профиль на Hack The Box <i className="fas fa-external-link-alt fa-xs"></i>
                  </a>
                </h3>
                <p>Решаю задачи на reverse engineering и binary exploitation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
