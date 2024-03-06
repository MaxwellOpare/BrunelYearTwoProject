import "../../css/reports.css"

function Report(props) {
    return (
        <div className="report-holder">
            <div className="title-bar">
                <h3 className="report-title">{props.data.Data.title} ({props.data.Data.dateCreated})</h3>
            </div>
            <span className="section-preview">
                    <p className="subtitle">Efficiency score: </p>
                    <label className="value">{props.data.Data.efficiencyScore}%</label>
            </span>
           
            <span className="option-holder">
                <button className="open" onClick={() => props.onClick(props.data.Data.id)}>Open</button>
            </span>
        </div>
    )
}

export default Report