import Layout from '../shared/Layout';
import sortedYoutubeData from '../../data/sortedYoutubeData.json';
import ContentsLayout from '../shared/ContentsLayout';
import SubscriptionCard from '../subscription/SubscriptionCard';

function Subscription() {
  return (
    <Layout activeMenu="subscription">
      <ContentsLayout>
        {sortedYoutubeData['data'].map(function (data, index) {
          return (
            <SubscriptionCard data={data} key={`subscription-card-${index}`} />
          );
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Subscription;