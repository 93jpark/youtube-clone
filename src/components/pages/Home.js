import styles from './Home.module.css';
import Layout from '../shared/Layout';
import youtubeData from '../../data/youtubeData.json';
import HomeFilter from '../home/HomeFilter';
import HomeCard from '../home/HomeCard';
import { useState } from 'react';

const  Home = () => {
    const [currentFilter, setCurrentFilter] = useState('전체');

    const setFilter = (newFilter) => {
      console.log(`prev is ${currentFilter}`)
      setCurrentFilter(newFilter);
      console.log(`current is ${currentFilter}`)
    }

    const filter = () => {

    }

    return (
        <Layout activeMenu="home">
          <div className={styles.header}>
            <HomeFilter
              filter="전체"
              text="전체"
              onClickFilter={(e) => {
                setFilter(e.target.outerText);
                console.log(e.target.outerText);
              }}
            />
            <HomeFilter
              filter="BTS"
              text="BTS"
              onClickFilter={(e) => {
                setFilter(e.target.outerText);
                console.log(e.target.outerText);

              }}
            />
            <HomeFilter
              filter="LISA"
              text="LISA"
              onClickFilter={(e) => {
                console.log(e.target.outerText);
                setFilter(e.target.outerText);
              }}
            />
          </div>
          <div className={styles.container}>
            {console.log(youtubeData)}
            <div className={styles.grid}>
            {youtubeData['data'].map((data, index) => {
                    

                      if(data.title.includes(currentFilter) || currentFilter === '전체') {
                        return (<HomeCard key={`explore-card-${index}`} data={data} index={index} />)
                      } 
                    
                    
                })}

            </div>
          </div>
        </Layout>
      );
}

export default Home;