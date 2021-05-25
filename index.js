// Bài 1: Tính tiền lương nhân viên
/**
 * b1: input
 *  - salaryPerDay, amountOfWorking
 * b2: handle
 * - Tạo biến salaryPerDay, amountOfWorking, totallySalary
 * - Tính totallySalary = salaryPerDay * amountOfWorking
 * b3: output
 * - Xuất ra totallySalary
 */
 console.log('========== EXERCISE 1 ==========');
 var salaryPerDay = 100000;
 var amountOfWorking = 23;
 var totallySalary;

 totallySalary = salaryPerDay*amountOfWorking;

 console.log('Salary is: ' + totallySalary + 'VND');


//Bài 2: Tính giá trị trung bình
/**
 * b1: input: giá trị 5 số thực
 * b2: handle
 * - Tạo biến no1, no2, no3, no4, no5, average
 * - Tính giá trung bình: giá trị trung bình = (tổng 5 số thực) / 5 
 * b3: output: xuất ra giá trị trung bình
 */
 console.log('========== EXERCISE 2 ==========');
 var no1 = 1;
 var no2 = 2;
 var no3 = 3;
 var no4 = 4;
 var no5 = 5;
 var average;

 average = (no1 + no2 + no3 + no4 + no5)/5;

 console.log('Average is: ' + average);


//Bài 3: Quy đổi tiền
/**
 * b1: input: giatriUSD, soTienQuyDoi
 * b2: handle
 * - Tạo biến giaTriUSD, soTienCanQuyDoi, soTienSauQuyDoi
 * - Tính số tiền cần quy đổi: soTienSauQuyDoi =  soTienCanQuyDoi*giatriUSD
 * b3: output: xuất ra số tiền sau quy đổi
 */
 console.log('========== EXERCISE 3 ==========');
 var valueOfUSD = 23500;
 var exchangedMoney = 2;
 var moneyAfterExchanging;

 moneyAfterExchanging = valueOfUSD*exchangedMoney;

console.log('Money after changing is ' + moneyAfterExchanging);


//Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 * b1: input: width, length;
 * b2: handle:
 * - Tạo biến: width, length, peremeter, area
 * - Tính chu vi: peremeter = (width+length)*2 
 * - Tính diện tích: area = width*length
 * b3: xuất ra peremeter, area
 */
 console.log('========== EXERCISE 4 ==========');
 var length = 20;
 var width = 10;
 var peremeter;
 var area;

 peremeter = (length + width)/2;
 area = length * width;

 console.log('Peremeter of rectangle is: ' + peremeter);
 console.log('Area of rectangle is: ' + area);


 //Bài 5: Tính tổng 2 ký số
 /**
  * b1: input: twoDegitNumber, units, dozens, sumOfTwoNumber
  * b2: handle
  * -Tạo biến: twoDegitNumber, units, dozens, sumOfTwoNumber
  * - Tính units: units = twoDegitNumber%10
  * - Tính dozens: dozens = twơDegitNumber/10
  * - Tính sumOfTwoNumber = units + dozens
  * b3: xuất ra: sumOfNumber
 */
  console.log('========== EXERCISE 5 ==========');
 var twoDegitNumber = 83;
 var units;
 var dozens;
 var sumOfTwoNumber;

 units = twoDegitNumber%10;
 dozens = twoDegitNumber/10;
 sumOfTwoNumber = units + dozens;

 console.log('Sum of two-degit is: ' + sumOfTwoNumber);


