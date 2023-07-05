$(document).ready(function () {
    $("#signup").submit(function (event) {
        const endpointApi = "https://api.lec-gemastik.or.id"


        event.preventDefault()

        let username = $("#username").val();
        let email = $("#email").val();
        let password = $("#password").val();

        let postData = {
            username: username,
            email: email,
            password: password,
            role_id: 2
        };

        $.ajax({
            url: `${endpointApi}/users/signup`, // Ganti dengan URL yang sesuai
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function(data) {
                console.log('Response:', data); // Lakukan apa pun dengan respon dari API di sini
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Pendaftaran berhasil, silakan login",
                    confirmButton: true
                }).then(e => {
                    window.location = "/login"
                })
            },
            error: function(error) {
                Swal.fire({
                    icon: "error",
                    title: "error",
                    text: "Pendaftaran gagal, silakan coba lagi",
                    confirmButton: true
                })
            }
        });
    })

    $("#signin").submit(function (event) {
        const endpointApi = "https://api.lec-gemastik.or.id"
        const endpointCalendar = "https://calendar.lec-gemastik.or.id"

        event.preventDefault()

        let email = $("#email").val();
        let password = $("#password").val();

        let postData = {
            email: email,
            password: password
        };

        $.ajax({
            url: `${endpointApi}/users/signin`, // Ganti dengan URL yang sesuai
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function(data) {
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Login berhasil",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                }).then(e => {
                    window.location = `${endpointCalendar}/?token=${data.data.token}&user=${data.data.role_id}`
                })
            },
            error: function(error) {
                Swal.fire({
                    icon: "error",
                    title: "error",
                    text: "Login gagal, silakan coba lagi",
                    confirmButton: true
                })
            }
        });
    })
})