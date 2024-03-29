import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="w-full py-5 text-center bg-black text-white fixed top-0 z-[999]">
            <div className="container mx-auto flex items-center justify-between px-[2vw] lg:px-0">
                <NavLink to='/' className='text-lg hover:text-green-600 duration-300'>Find User</NavLink>

                <div className="border px-2 lg:px-4 py-2 rounded-md hover:scale-90 duration-700 hover:bg-slate-400">
                    <Link to='/userList' className="text-sm lg:text-md">User List</Link>
                </div>

            </div>
        </div>
    )
}

export default Header