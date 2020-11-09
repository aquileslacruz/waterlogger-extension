import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector(state => state.login.user) || {};
    const name = user.first_name && user.last_name ?
        `${user.first_name} ${user.last_name}` :
        user.username

    return (
        <div>Hello {name}</div>
    )
}

export default Home;