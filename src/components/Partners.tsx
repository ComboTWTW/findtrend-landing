

const Partners = () => {

    let partners:string[] = [];    

    for (let i = 1; i <= 16; i++) {
        partners.push(`${i}.png`);
    }


  return (
    <div className="w-full bg-white flex justify-center">
        <div className="container w-full bg-white mt-24 md:mt-36 text-start">
            <h2 className="roboto tracking-wide text-black px-4 md:px-0 md:text-6xl text-4xl font-black  leading-tight md:leading-[135%]">Findtrend helps you to increase your productivity and reduce your computer's memory load, <span className="text-lightGray">an application that can fulfill your daily browsing needs.</span></h2>

            <div className="flex flex-col justify-center text-center mt-36 md:mt-64">
                <h2 className="roboto tracking-wide text-black px-4 md:px-0 md:text-6xl text-4xl font-black leading-tight md:leading-[135%]">Findtrend make +1000 Startup grow</h2>
                
                <div className="grid px-4 md:px-0 grid-cols-2 gap-4 md:grid-cols-4 md:gap-7 mt-14 md:mt-20">
                    {partners.map((partner) => {
                        return <img src={`/src/assets/Partners/${partner}`} alt={partner} className='w-full h-auto'/>
                    })}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Partners