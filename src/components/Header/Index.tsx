import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom';


const { Title } = Typography;

export default function Index() {
  return (
    <div className='header'>
        <Title level={2}>
          <Link to="/">Rocket Launcher</Link>
        </Title>
    </div>
  )
}
