import Layout from '../shared/Layout';
import ContentsLayout from '../shared/ContentsLayout';
import youtubeData from '../../data/youtubeData.json';
import ExploreCard from '../explore/ExploreCard';

const  Explore = () => {
    return (
        <Layout activeMenu="explore">
            <ContentsLayout>
                {youtubeData['data'].map((data, index) => {
                    return (
                        <ExploreCard key={`explore-card-${index}`} data={data} />
                    )
                })}
            </ContentsLayout>
        </Layout>
    )
}

export default Explore;