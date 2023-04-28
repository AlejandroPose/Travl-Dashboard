import React, { useEffect } from 'react'
import { getUniqueUser } from '../../redux/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const User = () => {

    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(getUniqueUser(userId));
    }, []);

    const userData = useSelector( state => state.users.uniqueUser ); 
    console.log(userData);

  return (
    <div>
    user
    </div>
  );

};