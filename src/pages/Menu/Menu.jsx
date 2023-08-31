const Menu = () => {
    return (
        <div className="pt-20 px-1 ">
            <h2 className="text-3xl text-center text-amber-500">Food Menu</h2>
            <div className="menu-header flex bg-slate-600 mt-4">
                <div>
                    <img className="w-60 h-44" src="https://i.ibb.co/r2QQhzh/menu2-600x413.jpg" alt="" />
                </div>
                <div className="body mt-10">
                    <h2 className="text-2xl ml-8 text-white">Meat Pizza. ...</h2>
                    <hr className="ml-8" />
                    <p className="ml-8 text-slate-300">A common street food Oaxaca. It features a thin tortilla topped with and more. It is often referred to as Mexican Pizza </p>
                </div>
                <div className="fortin">
                    <p className="text-4xl mt-14 ml-32 font-mono">$ 40</p>
                </div>
            </div>
            <div className="menu-header flex bg-slate-600 mt-4">
                <div>
                    <img className="w-60 h-44" src="https://i.ibb.co/Bc4dswW/menu3-600x413.jpg" alt="" />
                </div>
                <div className="body mt-10">
                    <h2 className="text-2xl ml-8 text-white">Buffalo Pizza.</h2>
                    <hr className="ml-8" />
                    <p className="ml-8 text-slate-300">A common street food Oaxaca. It features a thin tortilla topped with and more. It is often referred to as Mexican Pizza </p>
                </div>
                <div className="fortin">
                    <p className="text-4xl mt-14 ml-32 font-mono">$ 40</p>
                </div>
            </div>
            <div className="menu-header flex bg-slate-600 mt-4">
                <div>
                    <img className="w-60 h-44" src="https://i.ibb.co/kcFzdfN/menu1-600x413.jpg" alt="" />
                </div>
                <div className="body mt-10">
                    <h2 className="text-2xl ml-8 text-white">Pizza Mexicana</h2>
                    <hr className="ml-8" />
                    <p className="ml-8 text-slate-300">A common street food Oaxaca. It features a thin tortilla topped with and more. It is often referred to as Mexican Pizza </p>
                </div>
                <div className="fortin">
                    <p className="text-4xl mt-14 ml-32 font-mono">$ 40</p>
                </div>
            </div>
            
        </div>
    )
}

export default Menu;