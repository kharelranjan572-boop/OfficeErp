import React, { useEffect, useState } from 'react';
import './App.css';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from './api/user';
import LoginForm from './pages/loginForm';
import LoginCover from './component/loginCover';
function App() {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5, // 5 minutes
    refetchInterval: false
  });
  useEffect(() => {
    if (data) console.log('data', data);
    
  }, [data]);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <>
      <div className='  h-screen w-full '>
        <LoginCover />
       {/* <LoginForm /> */}
      </div>
    </>
  )
}

export default App
