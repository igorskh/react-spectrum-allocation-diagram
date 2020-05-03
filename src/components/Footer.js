import React from "react";

function Footer() {
    return <div>
        References:
        <ol>
            <li>
                <a rel="noopener noreferrer" target="_blank" href="https://www.bundesnetzagentur.de/SharedDocs/Downloads/EN/Areas/Telecommunications/Companies/TelecomRegulation/FrequencyManagement/ElectronicCommunicationsServices/FrequencyAward2018/20200128_SpectrumDiagram_pdf.pdf?__blob=publicationFile&v=1">
                    Spectrum diagram for Germany - Bundesnetzagentur
            </a>
            </li>
            <li>
                <a rel="noopener noreferrer" target="_blank" href="https://www.3gpp.org/dynareport/36101.htm">
                    E-UTRA Bands - 3GPP TS 36.101
            </a>
            </li>
            <li>
                <a rel="noopener noreferrer" target="_blank" href="https://www.3gpp.org/DynaReport/38101-1.htm">
                    NR Bands - 3GPP TS 38.101-1
            </a>
            </li>
        </ol>
        <p>
            &copy; 2020 Igor Kim
            &nbsp;|&nbsp;
            <a href="https://github.com/igorskh/react-spectrum-allocation-diagram">GitHub Repository</a>
        </p>
    </div>;
}

export default Footer;