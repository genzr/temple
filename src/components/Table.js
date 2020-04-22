import React, { Component } from "react";

const AppRes = {
    data: [{
                name: 'elodgement',
                versions: {
                    E1: 'outofcycle.2020.04.22.002',
                    E3: 'outofcycle.2020.04.22.002',
                    E4: 'outofcycle.2020.04.22.002',
                    E5: 'outofcycle.2020.04.22.002',
                    E6: 'outofcycle.2020.04.22.002',
                    E7: 'outofcycle.2020.04.22.002',
                    E8: 'outofcycle.2020.04.22.002',
                    E9: 'outofcycle.2020.04.22.002',
                }
            },{
                name: 'evisas',
                versions: {
                    E1: 'outofcycle.2020.04.22.002',
                    E3: 'outofcycle.2020.04.22.002',
                    E5: 'outofcycle.2020.04.22.002',
                    E6: 'outofcycle.2020.04.22.002',
                    E7: 'outofcycle.2020.04.22.002',
                    E8: 'outofcycle.2020.04.22.002',
                    E9: 'outofcycle.2020.04.22.002',
                }
            }, {
                name: 'abtc',
                versions: {
                    E1: 'outofcycle.2020.04.22.002',
                    E3: 'outofcycle.2020.04.22.002',
                    E4: 'outofcycle.2020.04.22.002',
                    E6: 'outofcycle.2020.04.22.002',
                    E7: 'outofcycle.2020.04.22.002',
                    E8: 'outofcycle.2020.04.22.002',
                    E9: 'outofcycle.2020.04.22.002',
                }
            }, {
                name: 'vevo',
                versions: {
                    E3: 'outofcycle.2020.04.22.002',
                    E4: 'outofcycle.2020.04.22.002',
                    E5: 'outofcycle.2020.04.22.002',
                    E6: 'outofcycle.2020.04.22.002',
                    E7: 'outofcycle.2020.04.22.002',
                    E8: 'outofcycle.2020.04.22.002',
                    E9: 'outofcycle.2020.04.22.002',
                }
            }
    ]
}

const scriptRes = {
    data: [{
                name: 'bart_data',
                versions: {
                    E1: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E3: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E4: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E5: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E6: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E7: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E8: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E9: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                }
            },{
                name: 'ecom_data',
                versions: {
                    E1: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E3: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E5: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E6: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E7: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E8: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E9: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                }
            }, {
                name: 'ecom_schema',
                versions: {
                    E1: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E3: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E4: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E6: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E7: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E8: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E9: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                }
            }, {
                name: 'olda_data',
                versions: {
                    E1: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E3: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E4: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E5: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E6: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E7: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E8: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                    E9: 'e9-[abtccore-schema]-[outofcycle.2020.04.22.001]',
                }
            }
    ]
}

const checkOddorEven = (app) => {
    if(AppRes.data.indexOf(app) === 0 || scriptRes.data.indexOf(app) === 0) {
        return 'even'
    } else if (AppRes.data.indexOf(app) % 2 === 0 || scriptRes.data.indexOf(app) % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="table-container">
        <h1 id="apps-heading">Applications</h1>

        <table id="apps-table">
          <tr id="apps-labels">
            <th></th>
            <th>E1</th>
            <th>E3</th>
            <th>E4</th>
            <th>E5</th>
            <th>E6</th>
            <th>E7</th>
            <th>E8</th>
            <th>E9</th>
          </tr>

        {AppRes.data.map((app) => {
            
            let oddOrEven = checkOddorEven(app) 
            
            return (
                <tr id={`${oddOrEven}-row`}>
                    <td id="app-name-col">{app.name}</td>
                    <td id="env-col">{app.versions.E1}</td>
                    <td id="env-col">{app.versions.E3}</td>
                    <td id="env-col">{app.versions.E4}</td>
                    <td id="env-col">{app.versions.E5}</td>
                    <td id="env-col">{app.versions.E6}</td>
                    <td id="env-col">{app.versions.E7}</td>
                    <td id="env-col">{app.versions.E8}</td>
                    <td id="env-col">{app.versions.E9}</td>
                </tr>
            )
        })}
        </table>

        <h1 id="scripts-heading">Database Scripts</h1>
        <table id="scripts-table">
          <tr id="scripts-labels">
            <th></th>
            <th>E1</th>
            <th>E3</th>
            <th>E4</th>
            <th>E5</th>
            <th>E6</th>
            <th>E7</th>
            <th>E8</th>
            <th>E9</th>
          </tr>

        {scriptRes.data.map((app) => {
            
            let oddOrEven = checkOddorEven(app) 
            
            return (
                <tr id={`${oddOrEven}-row`}>
                    <td id="app-name-col">{app.name}</td>
                    <td id="env-col">{app.versions.E1}</td>
                    <td id="env-col">{app.versions.E3}</td>
                    <td id="env-col">{app.versions.E4}</td>
                    <td id="env-col">{app.versions.E5}</td>
                    <td id="env-col">{app.versions.E6}</td>
                    <td id="env-col">{app.versions.E7}</td>
                    <td id="env-col">{app.versions.E8}</td>
                    <td id="env-col">{app.versions.E9}</td>
                </tr>
            )
        })}
        </table>
      </div>
    );
  }
}
