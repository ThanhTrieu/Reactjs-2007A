import React from 'react';
import InputYear from './components/InputYear';
import ButtonYear from './components/ButtonYear';
import Result from './components/Result';

class CheckYear extends React.Component {
  constructor(){
    super();
    this.state = {
      year: null,
      message: null
    }
  }
  changeInput = (e) => {
    let valYear = e.target.value; // lay ra gia tri nguoi dung nhap vao o input
    // cap nhat no vao state
    this.setState({year: valYear});
  }

  kiemTraNamNhuan = () => {
    let year = this.state.year;
    if(!isNaN(year) && year.length > 0){
      // thuc su la so
      year = parseInt(year);
      // kiem tra nam nhuan
      if(year % 400 === 0){
        this.setState({message: `${year} la nam nhuan DL`});
      } else if(year % 4 === 0 && year % 100 !== 0){
        this.setState({message: `${year} la nam nhuan DL`});
      } else {
        this.setState({message: `${year} khong phai nam nhuan DL`});
      }
    } else {
      this.setState({message: `${year} khong phai la so - vui long nhap so`});
    }
  }

  render() {
    //console.log(this.state.year);
    return(
      <>
        <InputYear change={this.changeInput} year={this.state.year} />
        <ButtonYear click={this.kiemTraNamNhuan}> Kiem Tra</ButtonYear>
        <Result result={this.state.message}></Result>
      </>
    )
  }
}
export default CheckYear;