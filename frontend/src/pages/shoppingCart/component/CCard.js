import CardReactFormContainer from 'card-react';
import '../../../../node_modules/card-react/lib/ccard.css'   
import './card.css';  

function CCard (props){
  const {cardNum,setCardNum,cName,setCName,cDate,setCDate,cvc,setCvc}=props

  const name=(e)=>{
    setCName(e.target.value);
     } 
  const cnum=(e)=>{
    setCardNum(e.target.value);
    }  
    // 驗證可能會出錯 先取消
  // const date=(e)=>{
  //   setCDate(e.target.value);
  //   }  
  const ccvc=(e)=>{
    setCvc(e.target.value);
    } 
    
    return(
<>
{/* // the container in which the card component will be rendered - can be anywhere in the DOM */}
<div id="card-wrapper"></div>
<CardReactFormContainer

  // the id of the container element where you want to render the card element.
  // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
  container="card-wrapper" // required

  // an object contain the form inputs names.
  // every input must have a unique name prop.
  formInputsNames={
    {
      number: 'CCnumber', // optional — default "number"
      expiry: 'CCexpiry',// optional — default "expiry"
      cvc: 'CCcvc', // optional — default "cvc"
      name: 'CCname' // optional - default "name"
    }
  }

  // initial values to render in the card element
  initialValues= {
    {
      number: '', 
      cvc: '', 
      expiry: '',
      name: '' 
    }
  }

  // the class name attribute to add to the input field and the corresponding part of the card element,
  // when the input is valid/invalid.
  classes={
    {
      valid: 'valid-input', // optional — default 'jp-card-valid'
      invalid: 'invalid-input' // optional — default 'jp-card-invalid'
    }
  }

  // specify whether you want to format the form inputs or not
  formatting={true} // optional - default true
>
<form className="cForm">
     
    <input placeholder="Full name" type="text" name="CCname" value={cName}  onChange={name} />
    <br/>
    <input placeholder="CARD NUMBER" type="text" name="CCnumber" 
    // value={cardNum} onChange={cnum}
      />
    <br/>
    <input placeholder="MM/YY" type="text" name="CCexpiry" 
    // value={cDate} 
    // onChange={date}   
    />
    <br/>
    <input placeholder="CVC" type="text" name="CCcvc" value={cvc} onChange={ccvc}  />
    <br/>
  </form>
 

</CardReactFormContainer>
 




</>
    )
}
export default CCard