// 2. JavaScript (Локалруу хадгалах код)
    
    document.getElementById('userInfoForm').addEventListener('submit', function(event) {
        // Форм автоматаар илгээгдэхээс сэргийлнэ
        event.preventDefault();

        // Оруулсан утгуудыг авна
        const lastName = document.getElementById('lastName').value.trim();
        const firstName = document.getElementById('firstName').value.trim();

        if (lastName && firstName) {
            // Мэдээллийг Local Storage-т хадгална
            localStorage.setItem('userLastName', lastName);
            localStorage.setItem('userFirstName', firstName);

            // Хэрэглэгчид амжилттай хадгалсан тухай мэдэгдэнэ
            document.getElementById('message').textContent = '✅ Мэдээлэл амжилттай хадгалагдлаа.';
            
            // Хадгалагдсан мэдээллийг харуулна (шалгах зорилгоор)
            displayStoredInfo();
            
            // Энд шалгалтын хуудас руу шилжих кодыг нэмнэ (жишээ нь: window.location.href = 'exam.html';)

        } else {
            document.getElementById('message').textContent = '⚠️ Овог болон Нэрээ бүрэн оруулна уу.';
        }
    });
 
   
    function displayStoredInfo() {
        const storedLast = localStorage.getItem('userLastName');
        const storedFirst = localStorage.getItem('userFirstName');

        if (storedLast && storedFirst) {
            console.log(`Хадгалагдсан Мэдээлэл: ${storedLast} овогтой ${storedFirst}`);
         
            window.location.href = '/exam.html';
        } else {
            document.getElementById('storedInfo').textContent = '';
        }
    }

    // Хуудас ачаалагдахад функцыг дуудна
    displayStoredInfo();