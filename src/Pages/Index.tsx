import React, { useState, useEffect } from 'react'
import { Card, List } from 'antd';
import { useGetLanuchesByNameQuery } from '../../src/service/launches'
import { SearchOutlined } from '@ant-design/icons'
import { Input,Skeleton } from 'antd'
import { Link } from 'react-router-dom';

export default function Index() {
  const [fullLaunch, setFullLunch] = useState<any>();
  const { data, error, isLoading } = useGetLanuchesByNameQuery('launches')
  
  useEffect(() => {
    setFullLunch(data);
  }, [data])
  
  
  const handleChange = (e: any) => {
    let newItems = data && data.filter((db: any) => db.rocket.rocket_name.includes(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)))
    setFullLunch(newItems);
  };


  if(isLoading){
    return (
      <div className='page'>
        <div className='sidebar'>

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
                    </Card>
                </List.Item>
                )}
            />
        </div>
    </div>
  )
}
