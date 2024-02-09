import SearchForm from "../Search/SearchForm"
import UserList from "../UserList/UserList"
import Users from "../Users/Users"

const Home = () => {
    return (
        <div>
            <SearchForm />
            <UserList />
            <Users></Users>
        </div>
    )
}

export default Home