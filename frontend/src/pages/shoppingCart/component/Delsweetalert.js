import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Delsweetalert(props){
  // const cartDetail = JSON.parse(localStorage.getItem('sCarts'))
  // const aaaId = props.aaaId

  //   console.log(aaaId);
  //   const deletedate = () => {const data2 = cartDetail.splice(aaaId,1)

  //       localStorage.setItem("sCarts", JSON.stringify(data2))
  //   }
    

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
        removePinfo.fire(
            '刪除!',
            '商品已刪除.',
            'success'
            )
            document.querySelector('.payInfoAll').remove();
            


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
  return(
  <>
  </>
  )
}
  export default Delsweetalert