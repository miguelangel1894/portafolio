interface Props{
    date?: string,
    company?: string
}

export function Date({date, company}: Props){
    return(
        <div className="date-container">
            <img src="./iconDate/calendar.svg" alt="" />
            <p>{date}</p>
            <img src="./iconDate/business.svg" alt="" />
            <p>{company}</p>
        </div>
    )
}