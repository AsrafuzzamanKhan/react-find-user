import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSeachInput = e => {
        setSearchTerm(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log('search FOR', searchTerm)

        if (searchTerm.length > 0) {
            navigate(`/search?query=${searchTerm}`)
            document.querySelector('input').value = '';
            setSearchTerm('')

        }

    }

    return (
        <div className="w-full h-[20vw] mt-20 lg:mt-10 flex items-center justify-center bg-cover object-fill bg-no-repeat bg-[url('./assets/cat.jpg')]">
            <form
                onSubmit={handleSubmit}
                className='w-2/3 md:w-1/3 flex'
            >
                <input
                    onChange={handleSeachInput}
                    className="w-full py-3 px-4 rounded-l-lg dark:bg-white" type="text" placeholder="Type User's First name ..." />
                <button className="btn py-4 bg-blue-400 rounded-tl-none rounded-bl-none border-0  justify-center">
                    <FiSearch className="text-xl  dark:text-white"></FiSearch>
                </button>
            </form>

        </div>
    )
}

export default SearchForm

