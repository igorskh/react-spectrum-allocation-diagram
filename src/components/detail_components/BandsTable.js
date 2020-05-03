import React from "react";
import BandRows from "./BandRows";

function BandsTable({ bands }) {
    return <div className="sg-detail-table">
        <table>
            <thead>
                <tr>
                    <th>Band</th>
                    <th>DL/UL</th>
                    <th>Duplex Mode</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                <BandRows
                    bands={bands} />
            </tbody>
        </table>
    </div>;
}

export default BandsTable;