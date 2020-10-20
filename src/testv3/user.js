import React, {useState, useEffect} from 'react';
import { Card, Col, Row, Skeleton, Pagination } from 'antd';
import LayoutPage from './components/layout';
import { api } from './api/index';

const { Meta } = Card;

const AppUser = () => {
  const [users, setListUsers] = useState([]);
  // const [showPrevious, setShowPrevious] = useState(false);
  // const [showNext, setShowNext] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)
  const [totalItem, setTotalItem] = useState(1);

  useEffect(() => {
    const getDataUser = async () => {
      const listUsers = await api.getListUserByPaging(page);
      if(listUsers){
        await setListUsers(listUsers.data);
        await setTotalPage(listUsers.total_pages);
        await setTotalItem(listUsers.total);
        if(page < 1){
          setPage(1);
        } else if(page > listUsers.total_pages){
          setPage(listUsers.total_pages);
        }

        // if(page > 1 && page <= listUsers.total_pages){
        //   setShowPrevious(true);
        // } else {
        //   setShowPrevious(false);
        // }
        // if(page >= 1 && page < listUsers.total_pages) {
        //   setShowNext(true);
        // } else {
        //   setShowNext(false);
        // }
      }
      
    }
    getDataUser();
  }, [page]);

  const jumpPage = (changePage) => {
    // if(type === 'prev'){
    //   if(page > 1){
    //     setPage(page - 1);
    //   }
    // } else if(type === 'next') {
    //   if(page < totalPage){
    //     setPage(page + 1);
    //   }
    // }
    if(changePage >= 1 && changePage <= totalPage){
      setPage(changePage);
    }
  }

  return(
    <>
      <LayoutPage>
      {users.length > 0 ? (
        <div className="site-card-wrapper" style={{padding: '20px'}}>
          <Row gutter={16}>
            {users.map(item => (
              <Col span={8} key={item.id}>
                <Card
                  hoverable
                  cover={<img alt="example" src={item.avatar} />}
                >
                  <Meta title={item.first_name} description={item.email} />
                </Card>
              </Col>
            ))}
          </Row>
        </div> ) : (<Skeleton active/>)}
        {/* <Row style={{marginTop: '20px', marginBottom: '20px'}}>
            <Col span={6} offset={9}>
              {showPrevious && (<Button onClick={() => jumpPage('prev')} type="primary"> Previous</Button>)}
              {showNext && (<Button onClick={() => jumpPage('next')} type="primary" style={{marginLeft: '10px'}}> Next</Button>)}
            </Col>
        </Row> */}
        <Row style={{marginTop: '20px', marginBottom: '20px'}}>
          <Pagination onChange={(changePage) => jumpPage(changePage)} defaultCurrent={page} total={totalItem} defaultPageSize={3} />
        </Row>
        <hr/>
      </LayoutPage>
    </>
  );
}
export default AppUser;
