import React, { useState, useEffect } from 'react'
import { Card, List } from 'antd';
import { useGetLanuchesByNameQuery } from '../../src/service/launches'
import { SearchOutlined } from '@ant-design/icons'
import { Input,Skeleton, Radio, Divider, Typography } from 'antd'
import { Link } from 'react-router-dom';


const {Title, Text} = Typography;

export default function Index() {
  const [fullLaunch, setFullLunch] = useState<any>();
  const [filter, setFilter] = useState<string>();
  const [status, setStatus] = useState<boolean>();
  const [upcoming, setUpcoming] = useState<boolean>();
  const { data, error, isLoading } = useGetLanuchesByNameQuery('launches');
  
  console.log(data);
  useEffect(() => {
    setFullLunch(data);
  }, [data])
  
  
  const handleChange = (e: any) => {
    let newItems = data && data.filter((db: any) => db.rocket.rocket_name.includes(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)))
    setFullLunch(newItems);
  };

  const handleStatusChange = (e: any) => {
    setStatus(e.target.value);
    let statusData = data.filter((dStatus: any) => dStatus.launch_success === JSON.parse(e.target.value));
    setFullLunch(statusData);
  }

  const handleUpcomingChange = (e: any) => {
    setUpcoming(e.target.value);
    let statusData = data.filter((dStatus: any) => dStatus.upcoming === JSON.parse(e.target.value));
    setFullLunch(statusData);
  }

  if(isLoading){
    return (
      <div className='page'>
        <div className='sidebar'>
          <Title level={3}>Filter</Title>
        </div>
        <div className='main-content'>
          <Input size="large" placeholder="Enter Rocket Name" onChange={handleChange} prefix={<SearchOutlined />} />
          <Skeleton active />
      </div>
      </div>
    )
  }

  if(error){
    <div>Someting went wrong. please try again later.</div>
  }
  
  return (  
    <div className='page'>
        <div className='sidebar'>
          <Title level={3}>Filter</Title>
          <Divider></Divider>
          <Text>Filter by:</Text>
          <br />
          <Text>Lauanching Date</Text>
          <br /><br />
          <Radio.Group value={filter} onChange={(e) => setFilter(e.target.value)}>
            <Radio.Button value="large">Last Week</Radio.Button>
            <Radio.Button value="default">Last Month</Radio.Button>
            <Radio.Button value="small">Last Year</Radio.Button>
          </Radio.Group>
          <Divider></Divider>
          <Text>Lanunching Status</Text>
          <br/><br />
          <Radio.Group value={status} onChange={handleStatusChange}>
            <Radio.Button value="true">Success</Radio.Button>
            <Radio.Button value="false">Failed</Radio.Button>
          </Radio.Group>
          <Divider></Divider>
          <Text>Upcoming</Text>
          <br/><br />
          <Radio.Group value={upcoming} onChange={handleUpcomingChange}>
            <Radio.Button value="true">Yes</Radio.Button>
            <Radio.Button value="false">No</Radio.Button>
          </Radio.Group>
        </div>
        <div className='main-content'>
            <Input size="large" placeholder="Enter Rocket Name" onChange={handleChange} prefix={<SearchOutlined />} />
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={fullLaunch}
                renderItem={(item: any) => (
                <List.Item>
                    <Card title={`Mission Name: ${item.mission_name}`} extra={<Link to={'launches/' + item.flight_number}>Details</Link>}>
                        <h3><b>Rocket Name:</b> {item?.rocket.rocket_name}</h3>
                        <p><b>Launching Year:</b> {item.launch_year}</p>
                        <p><b>Lanunching site:</b> {item.launch_site.site_name}</p>
                        <p>Launching Status: {item.launch_success ? <span className="success">Success</span> : <span className='failed'>Failed</span>} </p>
                        <p>Upcoming: {item.upcoming ? <span className="success">Yes</span> : <span className='failed'>No</span>} </p>

                    </Card>
                </List.Item>
                )}
            />
        </div>
    </div>
  )
}
