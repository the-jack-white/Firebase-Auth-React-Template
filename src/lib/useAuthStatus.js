import { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }

    setCheckingStatus(false)
  }, [currentUser])

  return { loggedIn, checkingStatus }
}