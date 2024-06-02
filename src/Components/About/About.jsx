import './About.css'

const About = () => {
    return (
        <main className='about-main flex flex-col md:flex-row items-center md:justify-evenly w-full h-fit md:h-[30rem] border-t-[1px] md:border-t-0'>
            <header className='welcome-message flex flex-col justify-center w-full md:w-1/3 h-fit md:h-full px-8 py-4 lg:px-16 md:py-16 md:border-r-[3px]'>
                <h2 className='hello text-start md:py-1 text-xl md:text-2xl'>Hello! <span className='my'>My </span><span className='name'>name </span><span className='is'>is</span></h2>
                <h1 className='kris-text text-start py-1 text-5xl lg:text-6xl'>Kris <span className='kurzawa-text'>Kurzawa.</span></h1>
                <h2 className='description text-start py-1 text-3xl md:text-4xl'>I develop and design things for the web.</h2>
            </header>
            <article className="about flex justify-center items-center md:w-2/3 h-fit md:h-full p-8 md:border-l-[4px] border-b-[3px] md:border-b-0 border-t-[2px] md:border-t-0 w-full lg:p-16  text-md md:text-xl">
                <p className='about-text'>Thank you for visiting my site!  Residing in Detroit Michigan I am a full-stack web developer/designer with a passion growing every day for making web ideas a reality.  While Javascript and the MERN stack are my go-to, I have an extra special place in my heart for CSS.  I am equally passionate about music which has led to my being a lifelong self-employed musician, composer, and music educator.  Currently, I am part-time employed at Detroit's Wayne State University as adjunct faculty in their Jazz Studies program.  I am currently seeking freelance, part-time, and full-time web development projects to bring to life.  Please feel free to hit me up... I'm always open.  Cheers!</p>
            </article>
        </main>
    )
}

export default About