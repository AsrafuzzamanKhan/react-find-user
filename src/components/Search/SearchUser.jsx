import { useLocation } from "react-router-dom";
import useUsers from "../../hooks/useUsers"
import SearchForm from "./SearchForm";
import User from "../Users/User";

const SearchUser = () => {
    const [users] = useUsers();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('query')
    // Filter the data array based on the search term
    const filteredResults = users.filter((item) =>
        item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full min-h-screen">
            <SearchForm></SearchForm>
            <div className=' container mx-auto w-full mb-20'>
                <div>
                    {/* title  */}
                    <div className="my-4 capitalize text-center font-semibold lg:text-left text-xl dark:text-white">
                        {filteredResults?.length > 0 ? `${filteredResults.length} results for ${searchTerm}` : `no result found for ${searchTerm} `}
                    </div>
                    {/* user grid */}
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:grid-[30px] w-full px-[1vw] lg:px-0">
                        {
                            filteredResults.map((user) => {
                                return <User key={user.id}
                                    user={user}
                                ></User>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SearchUser