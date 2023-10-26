import Swal from 'sweetalert2';

export default function handleException(message: string) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    confirmButtonColor: '#aa50b5'
  });
}
