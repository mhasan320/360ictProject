import React from 'react'
import { useGetLanuchesByNameQuery } from '../../service/launches'
import {useParams} from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons'
import { Skeleton, Typography, Button } from 'antd'
import { useNavigate } from "react-router-dom"

const { Title, Text, Paragraph } = Typography;

export default function Index() {
  const {id} = useParams()
  const navigate = useNavigate()


  const { data, error, isLoading } = useGetLanuchesByNameQuery(`launches/${id}`)

  if(isLoading){
    return (
      <div className="detailsPage">
          <Skeleton active />
      </div>
    )
  }

  if(error){
    return (
      <div className="detailsPage">Something went wrong. Please try again later.</div>
    )
  }

  return (
    <div className="detailsPage">
        <Button
            type="primary"
            icon={<LeftOutlined />}
            onClick={() => 
              navigate('/')
            }
          >
            Back
          </Button>
          <br /><br />
        <Title level={1}>Mission Name: {data.mission_name}</Title>
        <Title level={3}>Flight Number: {data.flight_number}</Title>
        <Title level={4}>Launch Date: {new Date(data.launch_date_local).toLocaleDateString('en-gb')}</Title>
        <Title level={4}>Rocket Name: {data.rocket.rocket_name}</Title>
        <Text>Launching Year: {data.launch_year} | Launching Status: {data.launch_success ? <span className='success'>Success</span> : <span className='failed'>Failed</span>}</Text>
        <Paragraph>{data.details}</Paragraph>
    </div>
  )
}
