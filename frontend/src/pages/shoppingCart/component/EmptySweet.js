import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function EmptySweet(){

const EmptySweet = Swal.fire({
    icon: 'warning',
    title: '購物車沒有商品',
    showConfirmButton: false,
    timer: 1500
  })
  return(
  <>
  </>
  )
}
  export default EmptySweet