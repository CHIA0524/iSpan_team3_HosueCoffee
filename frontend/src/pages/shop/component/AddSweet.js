import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AddSweet(){

const addsweet = Swal.fire({
    icon: 'success',
    title: '已加入購物車',
    showConfirmButton: false,
    timer: 1500
  })
  return(
  <>
  </>
  )
}
  export default AddSweet