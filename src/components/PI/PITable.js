//PITable uses the PI selected and asks the user to give importance for a ranking
import React, { Component } from 'react';
import './index.css';

import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
//import Button from '@material-ui/core/Button';
//import { withStyles } from '@material-ui/core/styles';
//import { makeStyles } from "@material-ui/core/styles";
//import Grid from '@material-ui/core/Grid';

/*
class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT "});
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT "});
  };
}
*/

const INITIAL_STATE = {
  AA: '1.0', AB: '1.0', AC: '1.0', AD: '1.0', AE: '1.0', AF: '1.0', AG: '1.0', AH: '1.0', AI: '1.0', AJ: '1.0',
  BA: '', BB: '1.0', BC: '1.0', BD: '1.0', BE: '1.0', BF: '1.0', BG: '1.0', BH: '1.0', BI: '1.0', BJ: '1.0', 
  CA: '', CB: '', CC: '1.0', CD: '1.0', CE: '1.0', CF: '1.0', CG: '1.0', CH: '1.0', CI: '1.0', CJ: '1.0',
  DA: '', DB: '', DC: '', DD: '1.0', DE: '1.0', DF: '1.0', DG: '1.0', DH: '1.0', DI: '1.0', DJ: '1.0',
  EA: '', EB: '', EC: '', ED: '', EE: '1.0', EF: '1.0', EG: '1.0', EH: '1.0', EI: '1.0', EJ: '1.0',
  FA: '', FB: '', FC: '', FD: '', FE: '', FF: '1.0', FG: '1.0', FH: '1.0', FI: '1.0', FJ: '1.0',
  GA: '', GB: '', GC: '', GD: '', GE: '', GF: '', GG: '1.0', GH: '1.0', GI: '1.0', GJ: '1.0',
  HA: '', HB: '', HC: '', HD: '', HE: '', HF: '', HG: '', HH: '1.0', HI: '1.0', HJ: '1.0',
  IA: '', IB: '', IC: '', ID: '', IE: '', IF: '', IG: '', IH: '', II: '1.0', IJ: '1.0',
  JA: '', JB: '', JC: '', JD: '', JE: '', JF: '', JG: '', JH: '', JI: '', JJ: '1.0',
  error: null, 
};
/*
score1: '', score2: '', score3: '', score4: '', score5: '', score6: '', score7: '', 
score8: '', score9: '', score10: '', total: '',
*/

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
              Profit Margin (A)
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('finance2')}
              className={getClassNamesFor('finance2')}
            >
              Sales Volume Projection (B)
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('timeline1')}
              className={getClassNamesFor('timeline1')}
            >
              Overdue Tasks (%) (C)
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('product1')}
              className={getClassNamesFor('product1')}
            >
             Failure Rate (D)
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('product2')}
              className={getClassNamesFor('product2')}
            >
            Customer Complaints (E)
            </button>  
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('brand1')}
              className={getClassNamesFor('brand1')}
            >
            Market Share (F)
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('brand2')}
              className={getClassNamesFor('brand2')}
            >
              Market Growth Projection (G)
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('human1')}
              className={getClassNamesFor('human1')}
            >
              Capacity Allocation (H)
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('production1')}
              className={getClassNamesFor('production1')}
            >
              Energy Consumption (I)
            </button> 
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('production2')}
              className={getClassNamesFor('production2')}
            >
              Rework Percentage (J)
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
              onClick={() => requestSort('importance')}
              className={getClassNamesFor('importance')}
            >
              Importance Ratio
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
            <td class="ellipsis">{item.importance}</td>      
          </tr>
        ))}
      </tbody>
    </table>
  );
};

/*
class rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking1: '',
      ranking2: '',
      ranking3: '',
      ranking4: '',
      ranking5: '',
      ranking6: '',
      ranking7: '',
      ranking8: '',
      ranking9: '',
      ranking10: '',
    };
  }

  render() {

    return (

    )
  }
}
*/


class PITable extends Component {
  constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE, financialGoal: '' , };
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

/*
    const {
        AA, AB, AC, AD, AE, AF, AG, AH, AI, AJ, 
        BA, BB, BC, BD, BE, BF, BG, BH, BI, BJ,
        CA, CB, CC, CD, CE, CF, CG, CH, CI, CJ,
        DA, DB, DC, DD, DE, DF, DG, DH, DI, DJ,
        EA, EB, EC, ED, EE, EF, EG, EH, EI, EJ,
        FA, FB, FC, FD, FE, FF, FG, FH, FI, FJ,
        GA, GB, GC, GD, GE, GF, GG, GH, GI, GJ,
        HA, HB, HC, HD, HE, HF, HG, HH, HI, HJ,
        IA, IB, IC, ID, IE, IF, IG, IH, II, IJ,
        JA, JB, JC, JD, JE, JF, JG, JH, JI, JJ,
        error, 
    } = this.state;

    var {
      ranking1, ranking2,
  } = this.state;


    const isInvalid =
    AA !== '' || AB !== ''|| AC !== '' || AD !== '' || AE !== '' || AF !== '' || AG !== '' || AH !== '' || AI !== '' || AJ !== '' ||
    BA !== '' || BB !== ''|| BC !== '' || BD !== '' || BE !== '' || BF !== '' || BG !== '' || BH !== '' || BI !== '' || BJ !== '' ||
    CA !== '' || CB !== ''|| CC !== '' || CD !== '' || CE !== '' || CF !== '' || CG !== '' || CH !== '' || CI !== '' || CJ !== '' ||
    DA !== '' || DB !== ''|| DC !== '' || DD !== '' || DE !== '' || DF !== '' || DG !== '' || DH !== '' || DI !== '' || DJ !== '' ||
    EA !== '' || EB !== ''|| EC !== '' || ED !== '' || EE !== '' || EF !== '' || EG !== '' || EH !== '' || EI !== '' || EJ !== '' ||
    FA !== '' || FB !== ''|| FC !== '' || FD !== '' || FE !== '' || FF !== '' || FG !== '' || FH !== '' || FI !== '' || FJ !== '' ||
    GA !== '' || GB !== ''|| GC !== '' || GD !== '' || GE !== '' || GF !== '' || GG !== '' || GH !== '' || GI !== '' || GJ !== '' ||
    HA !== '' || HB !== ''|| HC !== '' || HD !== '' || HE !== '' || HF !== '' || HG !== '' || HH !== '' || HI !== '' || HJ !== '' ||
    IA !== '' || IB !== ''|| IC !== '' || ID !== '' || IE !== '' || IF !== '' || IG !== '' || IH !== '' || II !== '' || IJ !== '' ||
    JA !== '' || JB !== ''|| JC !== '' || JD !== '' || JE !== '' || JF !== '' || JG !== '' || JH !== '' || JI !== '' || JJ !== '' 
    ;
*/

    

    const total = AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ + (1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ + 
    (1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ + (1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ +
    (1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ + (1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ +
    (1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ + (1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ +
    (1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ + (1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ;

    return (
      <Container className="App">
        <div>
          <ProductTable
            products={[
              { id: 1, criteria: '1. Finance', indicators:'Profit Margin (A)' ,
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
                score : AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ, 
                importance: AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ/total, 
              },
              { id: 2, criteria: '2. Finance', indicators:'Sales Volume Projection (B)' , 
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
                score : (1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ, 
                importance: (1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ/total, 
              },
              { id: 3, criteria: '3. Timeline', indicators:'Overdue Tasks (%) (C)',
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
                score : (1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ, 
                importance: (1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ/total, 
              },
              { id: 4, criteria: '4. Product Performance', indicators:'Failure Rate (D)',
                finance1: <TextField value={(1/AD).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BD).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CD).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField required label="DD" variant="outlined" name='DD' value={DD} type="number" onChange={this.onChange} margin="normal"/>,
                product2: <TextField required label="DE" variant="outlined" name='DE' value={DE} type="number" onChange={this.onChange} margin="normal"/>,
                brand1: <TextField required label="DF" variant="outlined" name='DF' value={DF} type="number" onChange={this.onChange} margin="normal"/>,
                brand2: <TextField required label="DG" variant="outlined" name='DG' value={DG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="DH" variant="outlined" name='DH' value={DH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="DI" variant="outlined" name='DI' value={DI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="DJ" variant="outlined" ame='DJ' value={DJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : (1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ, 
                importance: (1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ/total, 
              },
              { id: 5, criteria: '5. Product Performance', indicators:'Customer Complaints (E)',
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
                score : (1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ, 
                importance: (1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ/total, 
              },
              { id: 6, criteria: '6. Brand Performance', indicators:'Market Share (F)' ,
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
                score : (1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ, 
                importance: (1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ/total, 
              },
              { id: 7, criteria: '7. Brand Performance', indicators:'Market Growth Projection (G)' ,
                finance1: <TextField value={(1/AG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                finance2: <TextField value={(1/BG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                timeline1: <TextField value={(1/CG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product1: <TextField value={(1/DG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                product2: <TextField value={(1/EG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand1: <TextField value={(1/FG).toFixed(1)} type="number" maxLength={3} margin="normal"/>,
                brand2: <TextField required label="GG" variant="outlined" name='GG' value={GG} type="number" onChange={this.onChange} margin="normal"/>,
                human1: <TextField required label="GH" variant="outlined" ame='GH' value={GH} type="number" onChange={this.onChange} margin="normal"/>,
                production1: <TextField required label="GI" variant="outlined" name='GI' value={GI} type="number" onChange={this.onChange} margin="normal"/>,
                production2: <TextField required label="GJ" variant="outlined" name='GJ' value={GJ} type="number" onChange={this.onChange} margin="normal"/>,
                score : (1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ, 
                importance: (1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ/total, 
              },
              { id: 8, criteria: '8. Human Resource', indicators:'Capacity Allocation (H)' ,
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
                score :(1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ, 
                importance: (1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ/total, 
              },
              { id: 9, criteria: '9. Production', indicators:'Energy Consumption (I)',
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
                score : (1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ, 
                importance: (1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ/total, 
              },
              { id: 10, criteria: '10. Production', indicators:'Rework Percentage (J)',
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
                score : (1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ, 
                importance: (1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ/total, 
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
        </div>
        <br></br>
      </Container>
    );
  }
}
/*
        <form onSubmit={this.onSubmit}>
 //         <Grid style = {{textAlign: 'center'}}>                                          
            <StyledButton 
              /*disabled={isInvalid}*/
   //           type="submit">
   //               Give me my rankings!
   //         </StyledButton>
  //        </Grid> 
   //       {error && <p>{error.message}</p>}
  //      </form>


//finance1: <input name="BA" value={BA} type="number" pattern="[0-9]*" onInput={this.onHandleChange.bind(this)} value={this.state.financialGoal} />

/*const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: '1.5rem',
  },
  label: {
      textTransform: 'capitalize',
  },
  
})(Button);
*/
export default PITable;

/*
  { id: 11, criteria: 'Total Score',
  score :  AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ + (1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ + 
          (1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ + (1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ +
          (1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ + (1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ +
          (1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ + (1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ +
          (1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ + (1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ,
},

    const score1 = AA*AB*AC*AD*AE*AF*AG*AH*AI*AJ;
    const score2 = (1/AB)*BB*BC*BD*BE*BF*BG*BH*BI*BJ;
    const score3 = (1/AC)*(1/BC)*CC*CD*CE*CF*CG*CH*CI*CJ; 
    const score4 = (1/AD)*(1/BD)*(1/CD)*DD*DE*DF*DG*DH*DI*DJ;
    const score5 = (1/AE)*(1/BE)*(1/CE)*(1/DE)*EE*EF*EG*EH*EI*EJ;
    const score6 = (1/AF)*(1/BF)*(1/CF)*(1/DF)*(1/EF)*FF*FG*FH*FI*FJ; 
    const score7 = (1/AG)*(1/BG)*(1/CG)*(1/DG)*(1/EG)*(1/FG)*GG*GH*GI*GJ;
    const score8 = (1/AH)*(1/BH)*(1/CH)*(1/DH)*(1/EH)*(1/FH)*(1/GH)*HH*HI*HJ;
    const score9 = (1/AI)*(1/BI)*(1/CI)*(1/DI)*(1/EI)*(1/FI)*(1/GI)*(1/HI)*II*IJ;
    const score10 = (1/AJ)*(1/BJ)*(1/CJ)*(1/DJ)*(1/EJ)*(1/FJ)*(1/GJ)*(1/HJ)*(1/IJ)*JJ;
*/