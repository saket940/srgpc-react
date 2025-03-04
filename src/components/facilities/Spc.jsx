import React from 'react'
import Line from '../line'
import Right from '../right'
import Left from '../left'
import Top from '../top'
import H2 from '../h2'
const Spc = () => {
  return (
    <>
    <H2 h2={"Solar-Powered Campus"}/>
     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " src="../public/sc2.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="../public/sc1.jfif" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="../public/sc3.jfif" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>

  <H2 h2={"Electricity Bill Analysis of Main Building,"}/>
  <H2 h2={"After Solar Installation (IVRS-N1405010327)"}/>
  <H2 h2={"FY 2022-23"}/>
      <table>
        <tbody><tr>
          <th colSpan="2">Before Solar Installation</th>
          <th colSpan="2">After Solar Installation</th>
          <th colSpan="2">Savings (Units per month approx) </th>
          <th colSpan="2">Savings (Rs. per month approx) </th>
          <th> Remarks </th>
        </tr>
          <tr>
            <th>Month</th><th>Units</th><th>Month</th><th>Units</th> <th>Month</th><th>Units</th>  <th>Month</th><th>Rs.</th><th></th>
          </tr>
          <tr>
            <td>Apr-19</td> <td>3892</td><td>Apr-22</td>            <td>1555</td><td>Apr-22</td>            <td>2337</td><td>Apr-22</td>            <td>Rs. 30381/-</td><td></td></tr>
          <tr><td>May-19 </td><td>3389</td><td>May-22</td><td>2990</td><td>May-22 </td><td>399</td><td>May-22 </td><td>Rs. 5187/-</td><td></td></tr>
          <tr><td>Jun-19</td><td>4161</td><td>Jun-22 </td><td>2017</td><td>Jun-22 </td><td>2144</td><td>Jun-22 </td><td>Rs. 27872/-</td><td></td></tr>
          <tr><td>Jul-19</td><td>1614</td><td>Jul-22 </td><td>831</td><td>Jul-22 </td><td>783</td><td>Jul-22 </td><td>Rs. 18501/-</td><td>Rs. 10179/- Unit charge + Rs. 8322/- Reduces in ASD</td></tr>
          <tr><td>Aug-19</td><td>2246</td><td>Aug-22 </td><td>1173</td><td>Aug-22 </td><td>1073</td><td>Aug-22 </td><td>Rs. 13949/-</td><td></td></tr>
          <tr><td>Sep-19</td><td>2745</td><td>Sep-22 </td><td>1743</td><td>Sep-22 </td><td>1002</td><td>Sep-22 </td><td>Rs. 13026/-</td><td></td></tr>
          <tr><td>Oct-19</td><td>3012</td><td>Oct-22 </td><td>981</td><td>Oct-22 </td><td>2031</td><td>Oct-22 </td><td>Rs. 26430/-</td><td></td></tr>
          <tr><td>Nov-19 </td><td>2164</td><td>Nov-22 </td><td>1129</td><td>Nov-22 </td><td>1035</td><td>Nov-22 </td><td>Rs. 13455/-</td><td></td></tr>
          <tr><td>Dec-19 </td><td>1952</td><td>Dec-22 </td><td>915</td><td>Dec-22 </td><td>1037</td><td>Dec-22 </td><td>Rs. 13481/-</td><td></td></tr>
          <tr><td>Jan-20 </td><td>1857</td><td>Jan-23 </td><td>837</td><td>Jan-23 </td><td>1020</td><td>Jan-23 </td><td>Rs. 13260/-</td><td></td></tr>
          <tr><td>Feb-20 </td><td>***</td><td>Feb-23 </td><td>***</td><td>Feb-23 </td><td>***</td><td>Feb-23 </td><td>***</td><td></td></tr>
          <tr><td>Mar-20 </td><td>1927</td><td>Mar-23 </td><td>967</td><td>Mar-23 </td><td>960</td><td>Mar-23 </td><td>12480</td><td></td></tr>
          <tr><th>Total Units (Old) </th><th>28959</th><th>Total Units (New) </th><th>15138</th><th>Total Units Saved </th><th>15758</th><th>Total Savings (Around) </th><th>Rs. 204854/-</th><th></th></tr>
        </tbody></table>
        <Line/>
        <H2 h2={"FY 2023-24"}/>
      <table>
        <tbody><tr>
          <th colSpan="2">Before Solar Installation</th>
          <th colSpan="2">After Solar Installation</th>
          <th colSpan="2">Savings (Units per month approx) </th>
          <th colSpan="2">Savings (Rs. per month approx) </th>
          <th> Remarks </th>
        </tr>
          <tr>
            <th>Month</th><th>Units</th><th>Month</th><th>Units</th> <th>Month</th><th>Units</th>  <th>Month</th><th>Rs.</th><th></th>
          </tr>
          <tr>
            <td>Apr-19</td> <td>3892</td><td>Apr-23</td>            <td>1294</td><td>Apr-23</td>            <td>2598</td><td>Apr-23</td>            <td>Rs. 33774/-</td><td></td></tr>
          <tr><td>May-19 </td><td>3389</td><td>May-23</td><td>2055</td><td>May-23 </td><td>1334</td><td>May-23 </td><td>Rs. 17342/-</td><td></td></tr>
          <tr><td>Jun-19</td><td>4161</td><td>Jun-23 </td><td>1548</td><td>Jun-23 </td><td>2613</td><td>Jun-23 </td><td>Rs. 33969/-</td><td></td></tr>
          <tr><td>Jul-19</td><td>1614</td><td>Jul-23 </td><td>1505</td><td>Jul-23 </td><td>109</td><td>Jul-23 </td><td>Rs. 1417/-</td><td></td></tr>
          <tr><td>Aug-19</td><td>2246</td><td>Aug-23 </td><td>1699</td><td>Aug-23 </td><td>547</td><td>Aug-23 </td><td>Rs. 7111/-</td><td></td></tr>
          <tr><td>Sep-19</td><td>2745</td><td>Sep-23 </td><td>1699</td><td>Sep-23 </td><td>1046</td><td>Sep-23 </td><td>Rs. 13598/-</td><td></td></tr>
          <tr><td>Oct-19</td><td>3012</td><td>Oct-23 </td><td>1569</td><td>Oct-23 </td><td>1443</td><td>Oct-23 </td><td>Rs. 18759/-</td><td></td></tr>
          <tr><td>Nov-19 </td><td>2164</td><td>Nov-23 </td><td>2010</td><td>Nov-23 </td><td>154</td><td>Nov-23 </td><td>Rs. 2002/-</td><td></td></tr>
          <tr><td>Dec-19 </td><td>1952</td><td>Dec-23 </td><td>28</td><td>Dec-23 </td><td>1924</td><td>Dec-23 </td><td>Rs. 25012/-</td><td></td></tr>
          <tr><td>Jan-20 </td><td>1857</td><td>Jan-24 </td><td>1061</td><td>Jan-24 </td><td>796</td><td>Jan-24 </td><td>Rs. 10348/-</td><td></td></tr>
          <tr><td>Feb-20 </td><td>***</td><td>Feb-24 </td><td>1990</td><td>Feb-24 </td><td>***</td><td>Feb-24 </td><td>***</td><td></td></tr>
          <tr><td>Mar-20 </td><td>1927</td><td>Mar-24 </td><td>1185</td><td>Mar-24 </td><td>742</td><td>Mar-24 </td><td>Rs. 9646/-</td><td></td></tr>
          <tr><th>Total Units (Old) </th><th>28959</th><th>Total Units (New) </th><th>17643</th><th>Total Units Saved </th><th>13306</th><th>Total Savings (Around) </th><th>Rs. 172978/-</th><th></th></tr>
        </tbody></table>
        <Line/>
        <H2 h2={"FY 2024-25"}/>
      <table>
        <tbody><tr>
          <th colSpan="2">Before Solar Installation</th>
          <th colSpan="2">After Solar Installation</th>
          <th colSpan="2">Savings (Units per month approx) </th>
          <th colSpan="2">Savings (Rs. per month approx) </th>
          <th> Remarks </th>
        </tr>
          <tr>
            <th>Month</th><th>Units</th><th>Month</th><th>Units</th> <th>Month</th><th>Units</th>  <th>Month</th><th>Rs.</th><th></th>
          </tr>
          <tr>
            <td>Apr-19</td> <td>3892</td><td>Apr-24</td>            <td>1464</td><td>Apr-24</td>            <td>2428</td><td>Apr-24</td>            <td>Rs. 31564/-</td><td></td></tr>
          <tr><td>May-19 </td><td>3389</td><td>May-24</td><td>2668</td><td>May-24 </td><td>721</td><td>May-22 </td><td>Rs. 9373/-</td><td></td></tr>
          <tr><td>Jun-19</td><td>4161</td><td>Jun-24 </td><td>1454</td><td>Jun-24 </td><td>2704</td><td>Jun-24 </td><td>Rs. 35191/-</td><td></td></tr>
          <tr><td>Jul-19</td><td>1614</td><td>Jul-24 </td><td>1447</td><td>Jul-24 </td><td>167</td><td>Jul-24 </td><td>Rs. 2171/-</td><td></td></tr>
          <tr><td>Aug-19</td><td>2246</td><td>Aug-24 </td><td>1334</td><td>Aug-24 </td><td>912</td><td>Aug-24 </td><td>Rs. 11856/-</td><td></td></tr>
          <tr><td>Sep-19</td><td>2745</td><td>Sep-24 </td><td>1741</td><td>Sep-24 </td><td>1004</td><td>Sep-24 </td><td>Rs. 13052/-</td><td></td></tr>
          <tr><td>Oct-19</td><td>3012</td><td>Oct-24 </td><td>upcoming</td><td>Oct-24 </td><td>upcoming</td><td>Oct-24 </td><td>upcoming</td><td></td></tr>
          <tr><td>Nov-19 </td><td>2164</td><td>Nov-24 </td><td>upcoming</td><td>Nov-24 </td><td>upcoming</td><td>Nov-24 </td><td>upcoming</td><td></td></tr>
          <tr><td>Dec-19 </td><td>1952</td><td>Dec-24 </td><td>upcoming</td><td>Dec-24 </td><td>upcoming</td><td>Dec-24 </td><td>upcoming</td><td></td></tr>
          <tr><td>Jan-20 </td><td>1857</td><td>Jan-25 </td><td>upcoming</td><td>Jan-25 </td><td>upcoming</td><td>Jan-25 </td><td>upcoming</td><td></td></tr>
          <tr><td>Feb-20 </td><td>***</td><td>Feb-25 </td><td>Upcoming</td><td>Feb-25 </td><td>Upcoming</td><td>Feb-25 </td><td>Upcoming</td><td></td></tr>
          <tr><td>Mar-20 </td><td>1927</td><td>Mar-25 </td><td>Upcoming</td><td>Mar-25 </td><td>Upcoming</td><td>Mar-25 </td><td>Upcoming</td><td></td></tr>
          <tr><th>Total Units (Old) </th><th>28959</th><th>Total Units (New) </th><th>10108</th><th>Total Units Saved </th><th>7936</th><th>Total Savings (Around) </th><th>Rs. 103207/-</th><th></th></tr>
        </tbody></table>
        <Line/>
        <div className="solar-container">
      <h2 >Off-Grid Solar System</h2>
      <p className="solar-description">
        Off-grid systems work independently of the grid but have batteries which
        can store the solar power generated by the system. The system usually
        consists of solar panels, battery, charge controller, grid box,
        inverter, mounting structure and balance of systems. The panels store
        enough sunlight during the day and use the excess power generated in the
        night. These systems are self-sustaining and can provide power for
        critical loads in areas where a power grid is not available. However,
        these systems require specialized equipment to function and can be
        costly to install. These are ideal for businesses which can sustain for
        a short period of time with no electricity.
      </p>
      <Line/>
      <h2 className="solar-subtitle">Applications:</h2>
      <ul className="solar-list">
        <li>
          <strong>Electricity supply in rural and remote areas -</strong> Off-grid
          solar systems can facilitate independent, long-term and sustainable
          electricity generation in rural and remote areas.
        </li>
        <li>
          <strong>Power backup in areas with frequent electricity cuts -</strong>
          A number of places in India face frequent power cuts due to power
          transmission malfunctions, which can hamper operations of companies
          and public institutions. Off-grid solar systems can provide an
          economical and viable long-term backup solution to overcome the
          problems occurring during frequent power cuts.
        </li>
      </ul>
      <Line/>
      <h2 className="solar-subtitle">Advantages:</h2>
      <ul className="solar-list">
        <li>These self-sustainable systems can work independently and do not rely on the grid.</li>
        <li>They generate enough power that can be stored and used at night or when the power grid is down.</li>
        <li>These are ideal for remote areas where there is no power access from the grid.</li>
        <li>Grid failures and shutdowns will not affect your power supply.</li>
      </ul>
      <Line/>
      <h2 className="solar-subtitle">UTL Solar Panel:</h2>
      <p className="solar-description">
        UTL solar panels are the latest technology and most innovative solar
        panels. A solar photovoltaic panel is a composition of solar
        photovoltaic cells, well arranged together in an aluminium frame and
        covered with high-quality glass.
      </p>
      <Line/>
      <h2 className="solar-subtitle">Installation Guidelines:</h2>
      <p className="solar-description">
        The installation of Solar Power System involves the following major steps:
      </p>
      <ul className="solar-list">
        <li>Civil Foundation Job</li>
        <li>Assembly and fixing of support structure.</li>
        <li>Mounting of Solar Modules on the Support Structure.</li>
        <li>Installation of Battery Bank.</li>
        <li>Interconnection of SPV panel in series & parallel configuration, Charge Control Unit and FJB</li>
        <li>Connection of Battery Bank and Load</li>
        <li>Earthing of Lightning Protection Unit.</li>
      </ul>
    </div>
    </>
  )
}

export default Spc
