import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import {searchValue} from '../../app/feature/searchSlice'
 


export default function Index() {

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    // dispatch(searchValue({searchValue: 'fdgdfg'}))
  };
  return (
    <div>
        <Input size="large" placeholder="Enter Rocket Name" onChange={handleChange} prefix={<SearchOutlined />} />

    </div>
  )
}
