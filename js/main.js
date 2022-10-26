const btn_guardar = document.querySelector('#btn-guardar');
const nombre = document.querySelector('#Nombre');
const apellido = document.querySelector('#Apellido');
const email = document.querySelector('#Email');
const consulta = document.querySelector('#Consulta');


let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-registro [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }

    return error;
};

let limpiar = () => {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    consulta.value = "";
};

let obtener_datos = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(nombre.value);
        console.log(apellido.value);
        console.log(email.value);
        console.log(consulta.value);
        Swal.fire({
            'title': 'Tu mensaje fue enviado!',
            'text': 'Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_guardar.addEventListener('click', obtener_datos);

const $form = document.querySelector('#frm-registro')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })
}