import React from "react";

const ClicksReportEmail = ({ data }) => {
    return (
        <div>
            <h1>Daily News Clicks Report</h1>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Total Clicks</th>
                        <th>Unique Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.category}</td>
                            <td>{item.total_clicks}</td>
                            <td>{item.unique_clicks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClicksReportEmail;
