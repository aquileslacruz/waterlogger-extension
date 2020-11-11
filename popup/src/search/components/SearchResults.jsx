import _ from 'lodash';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

const ResultsContainer = () => {
    const results = useSelector(state => state.search.results);

    return (
        <div className='results-list'>
            { results.map(e => <ResultItem {...e} />) }
        </div>
    )
};

const ResultItem = ({id, username, image='/profile.png'}) => (
    <div className='item'>
        <img src={image} className='image' />
        <span>{username}</span>
        <div className='right'>
            <FollowButton id={id} />
        </div>
    </div>
)

const FollowButton = ({id}) => {
    const user = useSelector(state => state.login.user);
    const following = _.get(user, 'following', [])
        .map(e => e.id)
        .includes(id);

    return following ?
        <MinusCircleOutlined className='remove-icon' /> :
        <PlusCircleOutlined className='add-icon' />
}

export default ResultsContainer;