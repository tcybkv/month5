import React, {useState} from 'react';

const ProjectCard = ({cardInfo}) => {
    const [click, setClick] = useState(false);
    const [isClick, setIsClick] = useState(true);
    const handleClick = () => {
        setClick(isClick);
        setIsClick(click);
    };
     return (
         <div style={{width: "350px", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: 'rgba(100, 100, 111, 0.2)0px 7px 29px 0px'}}>
             <img src="https://scontent.ffru1-3.fna.fbcdn.net/v/t39.30808-6/328444245_495649259392810_1623759479737448202_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iIpOPHLz_kIQ7kNvgHZylE3&_nc_ht=scontent.ffru1-3.fna&oh=00_AfCkYd7aYk-VEodFkn-BoBFlywOf3IoAzfHNAm-vcY4X1w&oe=664116CC" alt="Geeks" style={{width: '200px'}}/>
             <h2>{cardInfo.name}</h2>
             <p style={{fontWeight: '700', fontSize: '20px'}}>{cardInfo.username}</p>
             <button onClick={handleClick} style={{marginBottom: '30px'}}>more</button>
             {click && (
                 <p>
                     {cardInfo.email}
                 </p>
             )}
         </div>
     );
};

export default ProjectCard;