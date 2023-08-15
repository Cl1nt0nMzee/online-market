
const BreadCrumbItem = ({ linkObject }) => {
    return (
        <li className="breadcrumb-item"> <a href="http://"> <span></span> </a> </li>
        )
    }


export const BreadCrumb = ({ linkObject  }) => {


    return (
        <ul>
            {linkObject.map((link, index) => {
                return <BreadCrumbItem key={index} linkObject={link} />
            })}
        </ul>
    )
}