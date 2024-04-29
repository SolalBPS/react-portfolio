import '../Style/Timeline.css';

function Timeline(props) {
    return (
        <>
            {/* SOURCE: https://codepen.io/tutsplus/pen/GRYEwXX */}
            <section className="timeline overflow-auto w-75 bg-body-secondary border border-secondary rounded-4">
                <ol className='mb-0'>
                    {
                        props.infos?.map((time, index) => {
                            return (
                                <li className='rounded-start'
                                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                                    data-aos-easing="ease-in-sine"
                                >
                                    <div className='bg-body-tertiary text-body fs-5'>
                                        <h3 className="text-danger">{time?.date}</h3> {time?.title}
                                    </div>
                                </li>
                            )
                        })
                    }

                    {/* Dernier 'trait' dois être présent même sans données */}
                    <li className='rounded-end'
                        data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                    ></li>
                </ol>

            </section>
        </>
    );
}

export default Timeline;
