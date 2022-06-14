import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function SweetNUP(){

    const addsweet=Swal.fire({
        title: '您確定要刪除?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  return(
  <>
  </>
  )
}
  export default SweetNUP