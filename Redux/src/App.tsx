import { useState, type ChangeEvent, type FormEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetProductsQuery, useLoginUserMutation, type LoginData } from './store/apiSlice'
import { useSearchParams } from 'react-router-dom'

function App() {
  const [searchParams] = useSearchParams();
  const [loginData,setLoginData]=useState<LoginData>({
    identifier: '',
    password: ''
  })
  const { data, isLoading, isError, error }=useGetProductsQuery({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    sort: searchParams.get('sort') || '',
  });

  const [checkLogin, {isLoading: loginLoading}] =useLoginUserMutation();
  
  console.log(data);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLoginData((prevLoginData)=>{
      return {
        ...prevLoginData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(event: FormEvent) {
     event.preventDefault();

     checkLogin(loginData);
  }
  

  return (
    <>
      <h2>RTK query</h2>
      <form onSubmit={handleSubmit}>
        <input value={loginData.identifier} type="text" placeholder='Enter password' name='identifier' onChange={handleChange} />
        <input value={loginData.password} type="text" placeholder='Enter username' name='password' onChange={handleChange} />
        <button disabled={loginLoading} type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
