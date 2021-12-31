import styles from './Home.module.css';
import Layout from '../shared/Layout';
import youtubeData from '../../data/youtubeData.json';
import HomeFilter from '../home/HomeFilter';
import HomeCard from '../home/HomeCard';

const  Home = () => {
    return (
        <Layout activeMenu="home">
          <div className={styles.header}>
            <HomeFilter
              filter="전체"
              text="전체"
              onClickFilter={function () {
                console.log('전체');
              }}
            />
            <HomeFilter
              filter="전체"
              text="음악"
              onClickFilter={function () {
                console.log('음악');
              }}
            />
          </div>
          <div className={styles.container}>
            <div className={styles.grid}>{youtubeData['data'].map(HomeCard)}</div>
          </div>
        </Layout>
      );
}

export default Home;