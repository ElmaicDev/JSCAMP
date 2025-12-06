export function HomePage(){
    return (
        <main>
            <section>
                <img src="./public/background.webp" width="200" />
                <h1>Encuentra el trabajo de tus sueños</h1>
                <p>En DevJobs puedes encontrar el empleo ideal para ti</p>
                <form role="search">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                        <input type="text" placeholder="Buscar empleos por título, habilidad o empresa" />
                        <button type = "submit"> Buscar</button>
                    </div>
                </form>
            </section>

            <section>
                
                <header>
                    <h2>¿Por qué DevJobs?</h2>
                    <p>DevJobs es la principal plataforma de búsqueda de empleo para    desarrolladores. Conectamos a los mejores
                    talentos con las empresas más innovadoras.</p>
                </header>
                <footer>
                    <article>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>

                        <h3>Encuentra el trabajo de tus sueños</h3>
                        <p>Explora una amplia variedad de ofertas laborales en el sector tecnológico. Desde startups hasta grandes corporaciones, tenemos oportunidades para todos los niveles de experiencia.</p>
                    </article>
                    <article>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                        <h3>Conecta con las mejores empresas</h3>
                        <p>Nuestra plataforma te permite conectarte directamente con reclutadores y gerentes de contratación de las empresas más destacadas del sector tecnológico.</p>
                    </article>
                    <article>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-buildings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" /><path d="M16 8h2c1 0 2 1 2 2v11" /><path d="M3 21h18" /><path d="M10 12v0" /><path d="M10 16v0" /><path d="M10 8v0" /><path d="M7 12v0" /><path d="M7 16v0" /><path d="M7 8v0" /><path d="M17 12v0" /><path d="M17 16v0" /></svg>
                        <h3>Obtén el salario que mereces</h3>
                        <p>Accede a ofertas laborales que valoran tus habilidades y experiencia. Negocia tu salario con confianza sabiendo que estás siendo considerado por las mejores empresas.</p>
                    </article>
                 </footer>
            </section>
        </main>
    )
}