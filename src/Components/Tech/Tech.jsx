import { Tech } from '../../assets/data/Tech.jsx';
import './Tech.css';

const Techs = () => {
    return (
        <div id='Tech' className='pt-5 pb-5 '>
            {/* small */}
            <main className='md:hidden flex flex-col'>
                <h2 className='tech-header text-center text-3xl font-bold'>Tech I Use</h2>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id < 4 && (
                        <article key={item.id} className='tech-icons-title text-center'>
                            <button onClick={() => setTimeout(() =>
                                window.open(item.link, '_blank')
                                , 500)} ><i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </button>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id > 3 && item.id < 7 && (
                        <article key={item.id} className='tech-icons-title text-center'>
                            <button onClick={() => setTimeout(() =>
                                window.open(item.link, '_blank')
                                , 500)} ><i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </button>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id > 6 && item.id < 10 && (
                        <article key={item.id} className='tech-icons-title text-center'>
                            <button onClick={() => setTimeout(() =>
                                window.open(item.link, '_blank')
                                , 500)} ><i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </button>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id > 9 && (
                        <article key={item.id} className='tech-icons-title text-center'>
                            <button onClick={() => setTimeout(() =>
                                window.open(item.link, '_blank')
                                , 500)} ><i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </button>
                        </article>
                    ))}
                </section>

            </main>
            {/* md and lg */}
            <main className='hidden md:flex flex-col pb-10'>
                <h2 className='tech-header text-center pb-3 text-3xl font-bold'>Tech I Use</h2>
                <section className='flex flex-row justify-evenly flex-wrap pb-16'>
                    {Tech.map((item) => item.id < 7 && (
                        <article key={item.id} className='tech-icons-title text-center'>
                            <button onClick={() => setTimeout(() =>
                                window.open(item.link, '_blank')
                                , 500)} ><i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </button>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id > 6 && (
                        <article key={item.id} className='tech-icons-title text-center'>
                            <button onClick={() => setTimeout(() =>
                                window.open(item.link, '_blank')
                                , 500)} ><i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </button>
                        </article>
                    ))}
                </section>

            </main>
        </div>
    )
}

export default Techs