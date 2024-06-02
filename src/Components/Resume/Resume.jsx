import './Resume.css'

const Resume = () => {
    return (
        <main id='Resume' className='flex flex-col items-center bg-[#100607] text-[whitesmoke]'>
            <article className='flex-row justify-evenly'>
                <button className='res-btn mr-20'><a href='/KrisKurzawaResume.pdf' target='__blank'>View My Resume</a></button>
                <button className='res-btn ml-20'><a href='/MSUCertificateofCompletion.pdf' target='__blank'>View My Certificate</a></button>
            </article>

        </main>
    )
}

export default Resume