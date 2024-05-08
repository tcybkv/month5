import React, {useState} from "react";
import {variants} from "../../App";
import Container from "../../components/Container/Container";
import TabsComponent from "../../components/Container/Tabs";
import Souz from "../../components/souz/Souz";
import History from "../../components/history/History";
import Organ from "../../components/organ/Organ";
import Project from "../../components/project/Project";
import OurTeam from "../../components/ourTeam/OurTeam";

const VALUES = {
    souz: "souz",
    history: "history",
    organ: "organ",
    project: "project",
    ourTeam: "our team",
};
const categoriesSelect = [
    {
        value: VALUES.souz,
        label: "Союзе",
    },
    {
        value: VALUES.history,
        label: "История",
    },
    {
        value: VALUES.organ,
        label: "Органы",
    },
    {
        value: VALUES.project,
        label: "Проекты",
    },
    {
        value: VALUES.ourTeam,
        label: "Команда",
    },
];

const GetCategories = ({action}) => {
    switch (action) {
        case VALUES.souz:
            return <Souz/>;
        case VALUES.history:
            return <History/>;
        case VALUES.organ:
            return <Organ/>;
        case VALUES.project:
            return <Project children={<Container/>}/>;
        case VALUES.ourTeam:
            return <OurTeam/>;
        default:
            return <></>;
    }
};
const MainPage = () => {
    const [value, setValue] = useState(categoriesSelect?.[0].value);
    return (
        <div>
            <Container variant={variants.mid}>
                <TabsComponent
                    categoriesSelect={categoriesSelect}
                    value={value}
                    setValue={setValue}
                />
                <GetCategories action={value}/>
            </Container>
        </div>
    );
};

export default MainPage;
