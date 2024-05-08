import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCard} from "../../store/CardSlice";
import ProjectCard from "./ProjectCard";

function Project() {
    const dispatch  = useDispatch()
    const {cards, loading} = useSelector(state => state.CardSlice)

    useEffect(() => {
        dispatch(getCard())
    }, [dispatch])

    if (loading) return 'loading...'

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: '40px', marginTop: '40px', marginBottom: '40px'}}>
            {cards && cards.map(card => <ProjectCard cardInfo={card}/>)}
        </div>
    );
}

export default Project;