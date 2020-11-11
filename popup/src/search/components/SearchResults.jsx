const ResultsContainer = ({results}) => (
    <div className='results-list'>
        { results.map(e => <ResultItem {...e} />) }
    </div>
);

const ResultItem = ({id, username}) => (
    <div>{`${id} ${username}`}</div>
);

export default ResultsContainer;