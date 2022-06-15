/**-------Bài tập 1: Xuất 3 số theo thứ tự tăng dần-------- 
 
* Input: Số thứ 1, số thứu 2 số thứ 3
 * Xử lý:
 * + Tạo biến number1 lấy value
 * + Tạo biến number2 lấy value
 * + Tạo biến number3 lấy value
 * + Tạo biến ketQua_1 gán giá trị 0
 * + Sắp xếp so sánh 3 số bằng câu điều kiện
 * Output: 
 * + Kết quả khi so sánh 3 số.
*/

document.getElementById('btnSoSanh').onclick = function () {
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var ketQua_1 = '';
    if (number1 > number2 && number2 > number3) {
        ketQua_1 = number3 + '<' + number2 + '<' + number1
    } else if (number1 > number3 && number3 > number2) {
        ketQua_1 = number2 + '<' + number3 + '<' + number1
    } else if (number3 > number1 && number1 > number2) {
        ketQua_1 = number2 + '<' + number1 + '<' + number3
    } else if (number3 > number2 && number2 > number1) {
        ketQua_1 = number1 + '<' + number2 + '<' + number3
    } else if (number2 > number1 && number1 > number3) {
        ketQua_1 = number3 + '<' + number1 + '<' + number2
    } else if (number2 > number3 && number3 > number1) {
        ketQua_1 = number1 + '<' + number3 + '<' + number2
    } else if (number1 === number2 && number1 > number3) {
        ketQua_1 = number3 + '<' + number1
    } else if (number1 === number2 && number3 > number1) {
        ketQua_1 = number1 + '<' + number3
    } else if (number1 === number3 && number1 > number2) {
        ketQua_1 = number2 + '<' + number1
    } else if (number1 === number3 && number2 > number1) {
        ketQua_1 = number1 + '<' + number2
    } else if (number2 === number3 && number1 > number2) {
        ketQua_1 = number2 + '<' + number1
    } else if (number2 === number3 && number2 === number1) {
        ketQua_1 = number1 + '=' + number2 + '=' + number3
    } else {
        ketQua_1 = number1 + '<' + number2
    }
    document.getElementById('ketQua_1').innerHTML = ketQua_1;
}

/**-------Bài tập 2: Chương trình "Chào hỏi-------- 
 
* Input: Tên thành viên
 * Xử lý:
 * + Tạo biến tenThanhVien lấy value (string)
 * + Tạo biến ketQua_b2 gán giá trị ''
 * Output: 
 * + Lời chào tương ứng với mỗi thành viên.
*/

document.getElementById('guiLoiChao').onclick = function () {
    var tenThanhVien = document.getElementById('tenThanhVien').value;
    var ketQua_b2 = '';
    if (tenThanhVien == 'B') {
        ketQua_b2 = 'Xin chào Bố!'
    } else if (tenThanhVien == 'M') {
        ketQua_b2 = 'Xin chào ' + 'Mẹ!'
    } else if (tenThanhVien == 'AT') {
        ketQua_b2 = 'Xin chào ' + 'Anh Trai!'
    } else if (tenThanhVien == 'EG') {
        ketQua_b2 = 'Xin chào ' + 'Em Gái!'
    } else {
        ketQua_b2 = 'Xin chào Người lạ ơi!'
    }
    document.getElementById('ketQua_b2').innerHTML = ketQua_b2;
}
/**-------Bài tập 3: Đếm số chẵn lẻ-------- 
 
 * Input: Số thứ 1, số thứ 2, số thứ 3
 * Xử lý:
 * + Tạo biến number1 lấy value
 * + Tạo biến number2 lấy value
 * + Tạo biến number3 lấy value
 * + Tạo biến số chẵn
 * + Tạo biến số lẻ
 * + Tạo biến ketQua_3 = '';
 * + là số chẵn khi số đó chia hết cho 2
 * Output: 
 * + Đếm tổng số chẵn, tổng số lẻ.
*/

document.getElementById('btnDem').onclick = function () {
    var number1 = +document.getElementById('number11').value;
    var number2 = +document.getElementById('number22').value;
    var number3 = +document.getElementById('number33').value;
    var ketQua_3 = '';
    var soChan = 0;
    var soLe = 0;
    if (number1 % 2 === 0 && number2 % 2 !== 0 & number3 % 2 !== 0) {
        soChan += 1;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    } else if (number2 % 2 === 0 && number1 % 2 !== 0 & number3 % 2 !== 0) {
        soChan += 1;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    } else if (number3 % 2 === 0 && number1 % 2 !== 0 & number2 % 2 !== 0) {
        soChan += 1;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    } else if (number1 % 2 === 0 && number2 % 2 === 0 & number3 % 2 !== 0) {
        soChan += 2;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    } else if (number2 % 2 === 0 && number3 % 2 === 0 & number1 % 2 !== 0) {
        soChan += 2;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    } else if (number1 % 2 === 0 && number3 % 2 === 0 & number2 % 2 !== 0) {
        soChan += 2;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    } else if (number1 % 2 === 0 && number2 % 2 === 0 & number3 % 2 === 0) {
        soChan += 3;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    } else {
        soChan += 0;
        soLe = 3 - soChan;
        ketQua_3 = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
    }
    document.getElementById('ketQua_3').innerHTML = ketQua_3;
}
/**-------Bài tập 4: Đoán hình tam giác-------- 
 
 * Input: cạnh thứ 1, cạnh thứ 2, cạnh thứ 3
 * Xử lý:
 * + Tạo biến canh1 lấy value
 * + Tạo biến canh2 lấy value
 * + Tạo biến canh3 lấy value
 * + Tạo biến ketQua_4 = '';
 * + Tam giác đều : 3 cạnh bằng nhau
 * + Tam giác cân : 2 cạnh bằng nhau
 * + Tam giác vuông : bình phương tổng 2 cạnh = bình phương cạnh huyền
 * Output: 
 * + Loại tam giác.
*/

document.getElementById('duDoan').onclick = function () {
    var canh1 = +document.getElementById('canh1').value;
    var canh2 = +document.getElementById('canh2').value;
    var canh3 = +document.getElementById('canh3').value;
    var ketQua_4 = 0;
    if (canh1 === canh2 && canh2 === canh3) {
        ketQua_4 = 'Hình tam giác đều'
    } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
        ketQua_4 = 'Hình tam giác cân'
    } else if (canh1 * canh1 === canh2 * canh2 + canh3 * canh3 || canh2 * canh2 === canh1 * canh1 + canh3 * canh3 || canh3 * canh3 === canh2 * canh2 + canh1 * canh1) {
        ketQua_4 = 'Hình tam giác vuông'
    } else {
        ketQua_4 = 'Một loại tam giác nào đó'
    }
    document.getElementById('ketQua_4').innerHTML = ketQua_4;
}
