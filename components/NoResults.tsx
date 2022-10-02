const NoResults = () => {

    const options = [
        'If an item does not appear in our records, it does not exist.',
        'These are not the results you\'re looking for.',
        'Perhaps the archives are incomplete.',
        'I\'ve got a bad feeling about this.'
    ];

    return (
        <>
            <h3 className='no-results-header'>No Results Found</h3>
            <p className='no-results-body'>
                { options[Math.floor(Math.random() * 4)] }
            </p>
        </>
    )
}

export default NoResults