import react from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




const DeSweetalertfavo = () =>{

const MySwal = withReactContent(Swal)

MySwal.fire({
    title: <p>已取消收藏</p>,
    icon: 'success',
    showConfirmButton: false,
    timer: 1300,
    })
}


export default DeSweetalertfavo