# CodeCamp #9
## Chanakan Punyo 
โจทย์
4. ให้ Object ชื่อ ladder มี
	method ขึ้น และ ลง
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
4. (ต่อ) Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
4. (ต่อ) ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
ladder.up().up().down().showStep(); // 1
