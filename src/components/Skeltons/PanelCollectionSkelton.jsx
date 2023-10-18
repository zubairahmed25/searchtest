import Skeleton from 'react-loading-skeleton';

const PanelCollectionSkelton = () => {
    return (
        <div className='collection-link'>
            <Skeleton width={"100%"} style={{paddingTop:`${100*1.41}%`}} />
            <Skeleton width={"100%"} height={"56px"} />
        </div>

    );
};

export default PanelCollectionSkelton;