import Layout from '../shared/Layout';
import ContentsLayout from '../shared/ContentsLayout';
import youtubeData from '../../data/youtubeData.json';
import HorizontalCard from '../explore/HorizontalCard';

const  Explore = () => {
    return (
        <Layout activeMenu="explore">
            <ContentsLayout>
                {youtubeData['data'].map((data, index) => {
                    return (
                        <HorizontalCard key={`explore-card-${index}`} data={data} />
                    )
                })}
            </ContentsLayout>
        </Layout>
    )
}

export default Explore;