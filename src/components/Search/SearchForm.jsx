import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    // const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // setIsAnimating(false)
        }, 1000);
        // clear time out 
        return () => clearTimeout(timeout)
    }, [])

    const handleSeachInput = e => {
        // console.log(e.target.value)
        setSearchTerm(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log('search FOR', searchTerm)

        if (searchTerm.length > 0) {
            navigate(`/search?query=${searchTerm}`)
            document.querySelector('input').value = '';
            setSearchTerm('')

        } else {
            // if input is empty set animation to true
            // setIsAnimating(true)

        }

    }

    return (
        <div className="w-full h-[20vw] flex items-center justify-center bg-cover object-fill bg-no-repeat bg-[url('./assets/cat.jpg')]">
            <form
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleSeachInput}
                    className="relative input dark:bg-white" type="text" placeholder="Type book name or author name ..." />
                <button className="btn bg-blue-400 absolute rounded-tl-none rounded-bl-none border-0">
                    <FiSearch className="text-xl  dark:text-white"></FiSearch>
                </button>
            </form>

        </div>
    )
}

export default SearchForm

