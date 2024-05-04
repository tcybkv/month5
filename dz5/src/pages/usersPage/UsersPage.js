import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../../store/PostSlice";
import Card from '../../components/Card';

function UsersPage() {
    const dispatch = useDispatch();
    const { users, status } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error loading users!</p>;

    return (
        <div className='usersPageDiv'>
            <div className='usersMap'>
                {users.map((user) => <Card key={user.id} cardInfo={user} />)}
            </div>
        </div>
    );
}

export default UsersPage;
