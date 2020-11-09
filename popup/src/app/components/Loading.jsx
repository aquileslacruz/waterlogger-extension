import { useSelector } from 'react-redux';

const Loading = () => {
    const token = useSelector(state => state.login.token);

    if (!token) {
        console.log('Cambio a Login');
    } else {
        console.log('Cambio a pagina principal');
    }

    return (
        <div className='loading-container'>
            <span>Loading</span>
        </div>
    )
}

export default Loading;