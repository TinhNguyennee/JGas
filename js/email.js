function sendEmail() {
    var emailParams = {
        user_email: document.getElementById('user_email').value,
        to_name: 'Bạn',
        from_name: 'JGas',
        message: 'Cảm ơn bạn đã đăng ký nhận thông báo từ JGas. Chúng tôi sẽ gửi thông tin mới nhất đến bạn qua email.'
    };

    emailjs.send('service_fbypfkf', 'template_m1tprsr', emailParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Đăng ký thành công');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Đăng ký thất bại.');
        });
}