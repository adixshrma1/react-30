import React, { useEffect , useState} from 'react'
import axios from 'axios'

export const FetchMultiple = () => {
    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');

    useEffect(()=>{
        const fetchData = async ()=>{
            const res1 = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            setData1(res1);

            const res2 = await axios.get("https://jsonplaceholder.typicode.com/todos/2")
            setData2(res2);
        }
        fetchData();  
    }, [])
    console.log(data1)
  return (
    <>
        <h1 className='font-bold'>Task: Fetch Data from multiple APIs using axios.</h1>
        <p className='font-semibold'>Data 1</p>
        { data1 ? (
            <p>
                Title: {data1.data.title} <br />
                Id: {data1.data.id}
            </p>
        ): (
            <p>Loading...</p>
        )}
        <p className='font-semibold'>Data 2</p>
        { data2 ? (
            <p>
                Title: {data2.data.title} <br />
                Id: {data2.data.id}
            </p>
        ): (
            <p>Loading...</p>
        )} <br />
    </>
  )
}
