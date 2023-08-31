const BlogDetails = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 ml-12 pt-32">
            <div className="mt-4">
            <p className="absolute mt-80 text-white ml-5 text-2xl font-bold"> Jul 2015
                    Marginally impress you frien with <br /> this skinned water </p>
                <img className="relative" src="https://i.ibb.co/Bc4dswW/menu3-600x413.jpg" alt="" />
                
            </div>
            <div className="mt-4">
                <img className="relative" src="https://i.ibb.co/r2QQhzh/menu2-600x413.jpg" alt="" />
                {/* <p className="absolute mt-80 text-white ml-5 text-2xl font-bold"> Jul 2015
                    Marginally impress you frien with <br /> this skinned water </p> */}
            </div>
            <div className="mt-4">
                <img src="https://i.ibb.co/Bc4dswW/menu3-600x413.jpg" alt="" />
                {/* <p className="absolute mt-80 text-white ml-5 text-2xl font-bold"> Jul 2015
                    Marginally impress you frien with <br /> this skinned water </p> */}
            </div>
            <div className="mt-4">
                <img src="https://i.ibb.co/r2QQhzh/menu2-600x413.jpg" alt="" />
                {/* <p className="absolute mt-80 text-white ml-5 text-2xl font-bold"> Jul 2015
                    Marginally impress you frien with <br /> this skinned water </p> */}
            </div>
        </div>
    )
}

export default BlogDetails;