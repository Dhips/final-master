//PITable uses the PI selected and asks the user to give ranking for a ranking
import React, { Component } from 'react';
import './index.css';

import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const INITIAL_STATE = {
  AA: '1', AB: '1', AC: '1', AD: '1', AE: '1', AF: '1', AG: '1', AH: '1', AI: '1', AJ: '1',
  BA: '', BB: '1', BC: '1', BD: '1', BE: '1', BF: '1', BG: '1', BH: '1', BI: '1', BJ: '1', 
  CA: '', CB: '', CC: '1', CD: '1', CE: '1', CF: '1', CG: '1', CH: '1', CI: '1', CJ: '1',
  DA: '', DB: '', DC: '', DD: '1', DE: '1', DF: '1', DG: '1', DH: '1', DI: '1', DJ: '1',
  EA: '', EB: '', EC: '', ED: '', EE: '1', EF: '1', EG: '1', EH: '1', EI: '1', EJ: '1',
  FA: '', FB: '', FC: '', FD: '', FE: '', FF: '1', FG: '1', FH: '1', FI: '1', FJ: '1',
  GA: '', GB: '', GC: '', GD: '', GE: '', GF: '', GG: '1', GH: '1', GI: '1', GJ: '1',
  HA: '', HB: '', HC: '', HD: '', HE: '', HF: '', HG: '', HH: '1', HI: '1', HJ: '1',
  IA: '', IB: '', IC: '', ID: '', IE: '', IF: '', IG: '', IH: '', II: '1', IJ: '1',
  JA: '', JB: '', JC: '', JD: '', JE: '', JF: '', JG: '', JH: '', JI: '', JJ: '1',
  error: null, 
};

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('criteria')}
              className={getClassNamesFor('criteria')}
            >
              Criteria
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('indicators')}
              className={getClassNamesFor('indicators')}
            >
              Indicators
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('finance1')}
              className={getClassNamesFor('finance1')}
            >
              (A) Profit Margin
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('finance2')}
              className={getClassNamesFor('finance2')}
            >
              (B) Sales Volume Projection
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('timeline1')}
              className={getClassNamesFor('timeline1')}
            >
              (C) Overdue Tasks (%)
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('product1')}
              className={getClassNamesFor('product1')}
            >
             (D) Failure Rate
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('product2')}
              className={getClassNamesFor('product2')}
            >
            (E) Customer Complaints
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('brand1')}
              className={getClassNamesFor('brand1')}
            >
            (F) Market Share
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('brand2')}
              className={getClassNamesFor('brand2')}
            >
              (G) Market Growth Projection
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('human1')}
              className={getClassNamesFor('human1')}
            >
             (H) Capacity Allocation
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('production1')}
              className={getClassNamesFor('production1')}
            >
              (I) Energy Consumption
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('production2')}
              className={getClassNamesFor('production2')}
            >
              (J) Rework Percentage
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('score')}
              className={getClassNamesFor('score')}
            >
              Score
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('score')}
              className={getClassNamesFor('score')}
            >
              Percentage of Relative Importance
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={item.id}>
            <td class="head">{item.criteria}</td>
            <td class="head2">{item.indicators}</td>
            <td class="ellipsis">{item.finance1}</td>            
            <td class="ellipsis">{item.finance2}</td>
            <td class="ellipsis">{item.timeline1}</td>
            <td class="ellipsis">{item.product1}</td>            
            <td class="ellipsis">{item.product2}</td>
            <td class="ellipsis">{item.brand1}</td>
            <td class="ellipsis">{item.brand2}</td>            
            <td class="ellipsis">{item.human1}</td>
            <td class="ellipsis">{item.production1}</td>
            <td class="ellipsis">{item.production2}</td>            
            <td class="ellipsis">{item.score}</td>
            <td class="ellipsis">{item.ranking}</td>      
          </tr>
        ))}
      </tbody>
    </table>
  );
};

class PITable extends Component {
  constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE, financialGoal: '' , data };
  }

    onChange = event => {
      this.setState({ [event.target.name] : event.target.value });
    };

    onHandleChange = event => {
      const financialGoal = (event.target.validity.valid) ? event.target.value : this.state.financialGoal;
      
      this.setState({ financialGoal });
    };

    handleChange(event) {
      this.setState({value: event.target.value});
    }


  render(){

    const {
        AA, AB, AC, AD, AE, AF, AG, AH, AI, AJ, 
         BB, BC, BD, BE, BF, BG, BH, BI, BJ,
         CC, CD, CE, CF, CG, CH, CI, CJ,
         DD, DE, DF, DG, DH, DI, DJ,
         EE, EF, EG, EH, EI, EJ,
         FF, FG, FH, FI, FJ,
         GG, GH, GI, GJ,
         HH, HI, HJ,
         II, IJ,
         JJ, 
    } = this.state;
    
    const total = AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ + (1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ + 
    (1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ + (1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ +
    (1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ + (1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ +
    (1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ + (1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ +
    (1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ + (1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ;

    const score1 = (AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ/total*100).toFixed(3);
    const score2 = ((1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ/total*100).toFixed(3);
    const score3 = ((1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ/total*100).toFixed(3);
    const score4 = ((1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ/total*100).toFixed(3);
    const score5 = ((1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ/total*100).toFixed(3);
    const score6 = ((1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ/total*100).toFixed(3);
    const score7 = ((1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ/total*100).toFixed(3);
    const score8 = ((1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ/total*100).toFixed(3);
    const score9 = ((1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ/total*100).toFixed(3);
    const score10 = ((1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ/total*100).toFixed(3);
    
/*
    const data = [
      {
        name: "Profit Margin",
        criteria: score1,
      },
      {
        name: "Sales Volume Projection",
        criteria: score2,
      },
      {
        name: "Overdue Tasks",
        criteria: score3,
      },
      {
        name: "Failure Rate(%)",
        criteria: score4,
      },
      {
        name: "Customer Complaints",
        criteria: score5,
      },
      {
        name: "Market Share",
        criteria: score6,
      },
      {
        name: "Market Growth Projection",
        criteria: score7,
      },
      {
        name: "Capacity Allocation",
        criteria: score8,
      },
      {
        name: "Energy Consumption",
        criteria: score9,
      },
      {
        name: "Rework Percentage",
        criteria: score10,
      },
    ];
*/
const data = [
  {
    name: "A",
    Criteria: score1,
  },
  {
    name: "B",
    Criteria: score2,
  },
  {
    name: "C",
    Criteria: score3,
  },
  {
    name: "D",
    Criteria: score4,
  },
  {
    name: "E",
    Criteria: score5,
  },
  {
    name: "F",
    Criteria: score6,
  },
  {
    name: "G",
    Criteria: score7,
  },
  {
    name: "H",
    Criteria: score8,
  },
  {
    name: "I",
    Criteria: score9,
  },
  {
    name: "J",
    Criteria: score10,
  },
];



    return (
      <Container className="App">
        <div>
          <ProductTable
            products={[
              { id: 1, criteria: '1. Finance', indicators:'(A) Profit Margin' ,
                finance1: <TextField  required label="AA" variant="outlined" name='AA' value={AA} type="number" inputProps={{ maxLength: 3 }} onChange={this.onChange} margin="normal"/>,
                finance2: <TextField required label="AB" variant="outlined" name='AB' value={AB} type="number" onChange={this.onChange} margin="normal"/>,
                timeline1: <TextField required label="AC" variant="outlined" name='AC' value={AC} type="number" onChange={this.onChange} margin="normal"/>,
                product1: <TextField required label="AD" variant="outlined" name='AD' value={AD} type="number" onChange={this.onChange} margin="normal"/>,
                product2: <TextField required label="AE" variant="outlined" name='AE' value={AE} type="number" onChange={this.onChange} margin="normal"/>,
                brand1: <TextField required label="AF" variant="outlined" name='AF' value={AF} type="number" onChange={this.onChange} margin="normal"/>,
                brand2: <TextField required label="AG" variant="outlined" name='AG' value={AG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="AH" variant="outlined" name='AH' value={AH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="AI" variant="outlined" name='AI' value={AI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="AJ" variant="outlined" name='AJ' value={AJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : (AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ).toFixed(1),
                ranking: ((AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ/total*100).toFixed(3)+'%'), 
              },
              { id: 2, criteria: '2. Finance', indicators:'(B) Sales Volume Projection' , 
                finance1: <TextField value={(1/AB).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField required label="BB" variant="outlined" name='BB' value={BB} type="number" onChange={this.onChange} margin="normal"/>,
                timeline1: <TextField required label="BC" variant="outlined" name='BC' value={BC} type="number" onChange={this.onChange} margin="normal"/>,
                product1: <TextField required label="BD" variant="outlined" name='BD' value={BD} type="number" onChange={this.onChange} margin="normal"/>,
                product2: <TextField required label="BE" variant="outlined" name='BE' value={BE} type="number" onChange={this.onChange} margin="normal"/>,
                brand1: <TextField required label="BF" variant="outlined" name='BF' value={BF} type="number" onChange={this.onChange} margin="normal"/>,
                brand2: <TextField required label="BG" variant="outlined" name='BG' value={BG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="BH" variant="outlined" name='BH' value={BH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="BI" variant="outlined" name='BI' value={BI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="BJ" variant="outlined" name='BJ' value={BJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ).toFixed(1), 
                ranking: (((1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ/total*100).toFixed(3)+'%'), 
              },
              { id: 3, criteria: '3. Timeline', indicators:'(C) Overdue Tasks (%)',
                finance1:<TextField value={(1/AC).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BC).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField required label="CC" variant="outlined" name='CC' value={CC} type="number" onChange={this.onChange} margin="normal"/>,
                product1: <TextField required label="CD" variant="outlined" name='CD' value={CD} type="number" onChange={this.onChange} margin="normal"/>,
                product2: <TextField required label="CE" variant="outlined" name='CE' value={CE} type="number" onChange={this.onChange} margin="normal"/>,
                brand1: <TextField required label="CF" variant="outlined" name='CF' value={CF} type="number" onChange={this.onChange} margin="normal"/>,
                brand2: <TextField required label="CG" variant="outlined" name='CG' value={CG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="CH" variant="outlined" name='CH' value={CH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="CI" variant="outlined" name='CI' value={CI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="CJ" variant="outlined" name='CJ' value={CJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ).toFixed(1), 
                ranking: (((1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ/total*100).toFixed(3)+'%'), 
              },
              { id: 4, criteria: '4. Product Performance', indicators:'(D) Failure Rate',
                finance1: <TextField value={(1/AD).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BD).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CD).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField required label="DD" variant="outlined" name='DD' value={DD} type="number" onChange={this.onChange} margin="normal"/>,
                product2: <TextField required label="DE" variant="outlined" name='DE' value={DE} type="number" onChange={this.onChange} margin="normal"/>,
                brand1: <TextField required label="DF" variant="outlined" name='DF' value={DF} type="number" onChange={this.onChange} margin="normal"/>,
                brand2: <TextField required label="DG" variant="outlined" name='DG' value={DG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="DH" variant="outlined" name='DH' value={DH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="DI" variant="outlined" name='DI' value={DI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="DJ" variant="outlined" name='DJ' value={DJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ).toFixed(1), 
                ranking: (((1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ/total*100).toFixed(3)+'%'), 
              },
              { id: 5, criteria: '5. Product Performance', indicators:'(E) Customer Complaints',
                finance1: <TextField value={(1/AE).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BE).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CE).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField value={(1/DE).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product2: <TextField required label="EE" variant="outlined" name='EE' value={EE} type="number" onChange={this.onChange} margin="normal"/>,
                brand1: <TextField required label="EF" variant="outlined" name='EF' value={EF} type="number" onChange={this.onChange} margin="normal"/>,
                brand2: <TextField required label="EG" variant="outlined" name='EG' value={EG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="EH" variant="outlined" name='EH' value={EH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="EI" variant="outlined" name='EI' value={EI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="EJ" variant="outlined" name='EJ' value={EJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ).toFixed(1), 
                ranking: (((1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ/total*100).toFixed(3)+'%'), 
              },
              { id: 6, criteria: '6. Brand Performance', indicators:'(F) Market Share' ,
                finance1: <TextField value={(1/AF).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BF).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CF).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField value={(1/DF).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product2: <TextField value={(1/EF).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand1: <TextField required label="FF" variant="outlined" name='FF' value={FF} type="number" onChange={this.onChange} margin="normal"/>,
                brand2: <TextField required label="FG" variant="outlined" name='FG' value={FG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="FH" variant="outlined" name='FH' value={FH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="FI" variant="outlined" name='FI' value={FI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="FJ" variant="outlined" name='FJ' value={FJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ).toFixed(1), 
                ranking: (((1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ/total*100).toFixed(3)+'%'), 
              },
              { id: 7, criteria: '7. Brand Performance', indicators:'(G) Market Growth Projection' ,
                finance1: <TextField value={(1/AG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField value={(1/DG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product2: <TextField value={(1/EG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand1: <TextField value={(1/FG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand2: <TextField required label="GG" variant="outlined" name='GG' value={GG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="GH" variant="outlined" name='GH' value={GH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="GI" variant="outlined" name='GI' value={GI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="GJ" variant="outlined" name='GJ' value={GJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ).toFixed(1), 
                ranking: (((1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ/total*100).toFixed(3)+'%'), 
              },
              { id: 8, criteria: '8. Human Resource', indicators:'(H) Capacity Allocation' ,
                finance1: <TextField value={(1/AH).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BH).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CH).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField value={(1/DH).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product2: <TextField value={(1/EH).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand1: <TextField value={(1/FH).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand2: <TextField value={(1/GH).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                human1: <TextField required label="HH" variant="outlined" name='HH' value={HH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="HI" variant="outlined" name='HI' value={HI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="HJ" variant="outlined" name='HJ' value={HJ} type="number" onChange={this.onChange} margin="normal"/>,
                score :((1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ).toFixed(1), 
                ranking: (((1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ/total*100).toFixed(3)+'%'), 
              },
              { id: 9, criteria: '9. Production', indicators:'(I) Energy Consumption',
                finance1: <TextField value={(1/AI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField value={(1/DI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product2: <TextField value={(1/EI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand1: <TextField value={(1/FI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand2: <TextField value={(1/GI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                human1: <TextField value={(1/HI).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                production1: <TextField required label="II" variant="outlined" name='II' value={II} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="IJ" variant="outlined" name='IJ' value={IJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ).toFixed(1), 
                ranking: (((1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ/total*100).toFixed(3)+'%'), 
              },
              { id: 10, criteria: '10. Production', indicators:'(J) Rework Percentage',
                finance1: <TextField value={(1/AJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField value={(1/DJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product2: <TextField value={(1/EJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand1: <TextField value={(1/FJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand2: <TextField value={(1/GJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                human1: <TextField value={(1/HJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                production1: <TextField value={(1/IJ).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                production2: <TextField required label="JJ" variant="outlined" name='JJ' value={JJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : ((1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ).toFixed(1), 
                ranking: (((1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ/total*100).toFixed(3)+'%'), 
              },
              { id: 11, criteria: 'Total Score',
              score :  AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ + (1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ + 
                      (1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ + (1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ +
                      (1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ + (1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ +
                      (1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ + (1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ +
                      (1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ + (1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ,
              },
            ]}
          />
          <br></br>
          <h1 className='ha'>Graph of PI Relative Importance (%)</h1>
          <br></br>
          <Grid style = {{textAlign: 'center', padding: '50px', marginTop: '0px', paddingTop: '0px'}} >
          <BarChart
            width={1000}
            height={600}
            data={data}
            style = {{ paddingTop: '20px',  paddingBottom: '0px'}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Criteria" fill="#82ca9d"/>
          </BarChart>
          </Grid>
        </div>
        <br></br>
      </Container>
    );
  }
}

export default PITable;

/*
            margin={{
              top: 5,
              left: 225,
              bottom: 5
            }}

*/