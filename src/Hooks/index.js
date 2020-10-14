import React, { useState } from 'react';
import Counter from './components/counter';
import InputNumber from './components/input-number';
import ButtonNumber from './components/button';
import Result from './components/result';

const AppHooks = () => {
  let [hsa, setHsa] = useState('');
  let [hsb, setHsb] = useState('');
  let [hsc, setHsc] = useState('');
  let [result, setResult] = useState(null);

  const changeInput = (event) => {
    let nameInput = event.target.name;
    let val = event.target.value;
    if(nameInput === 'hsa'){
      setHsa(val);
    } else if(nameInput === 'hsb') {
      setHsb(val);
    } else if(nameInput === 'hsc'){
      setHsc(val);
    }
  }

  const giaiPhuongTrinh = () => {
    //console.log(hsa, hsb, hsc);
    let chka = null;
    let chkb = null;
    let chkc = null;
    if(!isNaN(hsa) && hsa.length > 0){
      // thuc su la chuoi so
      hsa = parseFloat(hsa);
      chka = true;
    } else {
      chka = false;
    }
    if(!isNaN(hsb) && hsb.length > 0){
      hsb = parseFloat(hsb);
      chkb = true;
    } else {
      chkb = false;
    }
    if(!isNaN(hsc) && hsc.length > 0){
      hsc = parseFloat(hsc);
      chkc = true;
    } else {
      chkc = false;
    }
    if(chka && chkb && chkc){
      let delta = (hsb * hsb) - (4*hsa*hsc);
      if(delta < 0){
        setResult(`Phuong trinh vo nghiem`);
      } else if(delta == 0){
        setResult(`Phuong trinh co nghiem kep : ${-hsb/(2*hsa)}`);
      } else {
        let x1 = (hsb + Math.sqrt(delta)) / (2*hsa);
        let x2 = (hsb - Math.sqrt(delta)) / (2*hsa);
        setResult(`Phuong trinh co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`);
      }
    } else {
      setResult(`Vui long nhap so`);
    }
  }

  return(
    <>
      <Counter/>
      <div className="ptbh">
        <p>He so a</p>
        <InputNumber change={changeInput} type="text" name="hsa" />
        <p>He so b</p>
        <InputNumber change={changeInput} type="text" name="hsb" />
        <p>He so c</p>
        <InputNumber change={changeInput} type="text" name="hsc" />
        <br/><br/>
        <ButtonNumber
          type="button"
          giaipt={giaiPhuongTrinh}
        >Giai PT</ButtonNumber>
        <Result result={result} />
      </div>
    </>
  );
}
export default AppHooks;