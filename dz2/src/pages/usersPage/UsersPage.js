import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";
import Card from "../../components/Card";

function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }
    return (
        <div className='usersPageDiv' >
            <button onClick={getUsers} className='usersButton' ><b>GET USERS</b></button>
            <div className='usersMap'>
                {users.map((user) => <Card cardInfo={user}/>)}
            </div>
        </div>
    );
}

export default UsersPage;