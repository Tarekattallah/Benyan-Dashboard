import { Outlet } from "react-router-dom";

function Project () {
    const projectData = {
        profile: "Projects Names",
        columns: ["#", "First Name", "Project", "company"], 
        users: [
            { id: 1, firstName: "Altarek", lastName: "CMS", username: "MazComp" },
            { id: 2, firstName: "Altarek", lastName: "E-Commerce", username: "YOuCOmp" }
        ]
    };
    return (

    <>
    <Outlet context={projectData}/>
    </>

    );
}
export default Project ;