import Swal from 'sweetalert2'
import { useState } from 'react';
// import withReactContent from 'sweetalert2-react-content'

function Delsweetalert(props){
  const {thisTT,i, price ,setPtotal,ptotal}=props;
  const datas1 = JSON.parse(localStorage.getItem('sCarts'))

  const [datasNEW, setdatasNEW] = useState(datas1)
  //console.log.log(datasNEW)
  
  
  return(
  <>
    <div className="col-2">
                        <button className="deletBtn"  onClick={()=>{  
                          
                          const removePinfo = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})
removePinfo.fire({
    title: '刪除',
    text: "你確定要刪除嗎？",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '是的，刪除!',
    cancelButtonText: '取消!',
    reverseButtons: true
}).then((result) => {
    if (result.isConfirmed) {
      Swal.getConfirmButton(
        removePinfo.fire(
            '刪除!',
            '商品已刪除.',
            'success'

            
            
            )
        )
        
            datasNEW.splice(i,1)
            //console.log.log(datasNEW);
            localStorage.setItem("sCarts", JSON.stringify(datasNEW))
            const datas222 = JSON.parse(localStorage.getItem('sCarts'))
            setdatasNEW(datas222)

          

          

    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
        removePinfo.fire(
        '取消',
        '商品未刪除 :)',
        'error'
      )
    }
  })
  }}>刪除</button>
                    </div>
  </>
  )
}
  export default Delsweetalert