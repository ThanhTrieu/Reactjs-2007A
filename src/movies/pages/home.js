import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Pagination } from 'antd';
import LayoutComponent from '../components/layout';
import { getDataNewFilm } from '../services/api';
import LoadingData from '../components/loading-data';

const { Meta } = Card;

const HomePage = () => {
  const [loadingHome, setLoadingHome] = useState(false);
  const [movies, setMovie] = useState([]);
  const [totalItems, setTotaItem] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoadingHome(true);
      const data = await getDataNewFilm(page);
      if(data){
        setMovie(data.results);
        setTotaItem(data.total_results);
        if(page < 1){
          setPage(1);
        } else if(page > data.total_pages) {
          setPage(data.total_pages);
        }
        setLoadingHome(false);
      }
    }
    getData();
  }, [page]);

  const changePage = (pages) => {
    setPage(pages);
  }

  if(loadingHome || movies.length === 0){
    return (
      <LayoutComponent>
        <LoadingData/>
      </LayoutComponent>
    )
  }

  return (
    <LayoutComponent>
      <Row style={{marginTop: '20px', marginBottom: '20px'}}>
        {movies.map((item, index) => (
          <Col span={6} key={index}>
            <Card
              hoverable
              style={{ width: 400, marginBottom: '15px', marginRight: '5px'}}
              cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`} />}
            >
              <Meta title={item.title} />
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{textAlign: 'center', marginTop: '20px'}}>
          <Col span={24}>
            <Pagination
              current={page}
              pageSize={20}
              total={totalItems}
              onChange={(pages) => changePage(pages) }
            />
          </Col>
      </Row>
    </LayoutComponent>
  )
}
export default React.memo(HomePage);