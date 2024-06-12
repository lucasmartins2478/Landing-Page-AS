window.sr = ScrollReveal({ reset: true });

        sr.reveal(".container", {
            rotate: { x: 0, y: 80, z: 0 },
            duration: 2000,
        });
        sr.reveal(".causas-container", {
            rotate: { x: 0, y: 80, z: 0 },
            delay: 200,
            duration: 2000,
        });

        sr.reveal(".linguagens-info", {
            // origin: 'left',
            rotate: { x: 0, y: 80, z: 0 },
            delay: 200,
            duration: 2000,
        });

        sr.reveal(".login", {
            origin: "top",
            distance: "10px",
            duration: 2000,
            delay: 500,
            easing: "ease",
        });
        sr.reveal(".form-container", {
            origin: "top",
            distance: "10px",
            duration: 2000,
            delay: 500,
            easing: "ease",
        });


        function scrollToForm() {
            const formSection = document.getElementById('form-section');
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
        function scrollToOng() {
            const ongSection = document.querySelector('.como_comecar_ong');
            ongSection.scrollIntoView({ behavior: 'smooth' });
        }





        document.getElementById('save-btn').addEventListener('click', function (event) {
            event.preventDefault(); // Impede o envio do formulário pelo método padrão

            // Coleta os dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const tel = document.getElementById('tel').value;
            if (nome == "" || email == "" || tel == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: 'Preencha todos os campos.'
                })
                return
            }
            // Cria um objeto com os dados do usuário
            const userData = {
                nome: nome,
                email: email,
                telefone: tel
            };

            // Define a URL para onde os dados serão enviados
            const url = 'https://664d0a0cede9a2b556527d60.mockapi.io/api/v1/users';

            // Faz a requisição POST usando Fetch API
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => response.json())
                .then(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Email enviado',
                        text: 'Enviaremos um email para mais informações.'
                    }).then(() => {
                        window.location.href = 'https://forms.gle/wgA2D7oWhjYc3f618';
                        });
                    document.querySelector('#nome').value = ""
                    document.querySelector('#email').value = ""
                    document.querySelector('#tel').value = ""
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Preencha todos os campos.'
                    })
                });
        });