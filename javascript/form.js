// need
var land = document.getElementById("land");
var machinery = document.getElementById("machinery");
var shed = document.getElementById("shed");
var expenditure = document.getElementById("expenditure");
var computer = document.getElementById("computer");
var furniture = document.getElementById("furniture");
var electricity = document.getElementById("electricity");
var racks = document.getElementById("racks");
var vehicle = document.getElementById("vehicle");
var software = document.getElementById("software");

// expense
var rent = document.getElementById("rent");
var salary = document.getElementById("salary");
var purchase = document.getElementById("purchase");
var stationary = document.getElementById("stationary");
var water = document.getElementById("water");
var repair = document.getElementById("repair");
var cost = document.getElementById("cost");
var postal = document.getElementById("postal");
var marketing = document.getElementById("marketing");
var misc = document.getElementById("misc");

// need
function land_expand() {
  if (land.style.display != "block") {
    land.style.display = "block";
  } else {
    land.style.display = "none";
  }
}
function mach_expand() {
  if (machinery.style.display != "block") {
    machinery.style.display = "block";
  } else {
    machinery.style.display = "none";
  }
}
function shed_expand() {
  if (shed.style.display != "block") {
    shed.style.display = "block";
  } else {
    shed.style.display = "none";
  }
}

function pexpand() {
  if (expenditure.style.display != "block") {
    expenditure.style.display = "block";
  } else {
    expenditure.style.display = "none";
  }
}
function comp_expand() {
  if (computer.style.display != "block") {
    computer.style.display = "block";
  } else {
    computer.style.display = "none";
  }
}
function fur_expand() {
  if (furniture.style.display != "block") {
    furniture.style.display = "block";
  } else {
    furniture.style.display = "none";
  }
}
function elect_expand() {
  if (electricity.style.display != "block") {
    electricity.style.display = "block";
  } else {
    electricity.style.display = "none";
  }
}
function racks_expand() {
  if (racks.style.display != "block") {
    racks.style.display = "block";
  } else {
    racks.style.display = "none";
  }
}
function vehicle_expand() {
  if (vehicle.style.display != "block") {
    vehicle.style.display = "block";
  } else {
    vehicle.style.display = "none";
  }
}
function soft_expand() {
  if (software.style.display != "block") {
    software.style.display = "block";
  } else {
    software.style.display = "none";
  }
}
// expense
function rent_expand() {
  if (rent.style.display != "block") {
    rent.style.display = "block";
  } else {
    rent.style.display = "none";
  }
}
function salary_expand() {
  if (salary.style.display != "block") {
    salary.style.display = "block";
  } else {
    salary.style.display = "none";
  }
}
function purchase_expand() {
  if (purchase.style.display != "block") {
    purchase.style.display = "block";
  } else {
    purchase.style.display = "none";
  }
}

function stationary_expand() {
  if (stationary.style.display != "block") {
    stationary.style.display = "block";
  } else {
    stationary.style.display = "none";
  }
}
function water_expand() {
  if (water.style.display != "block") {
    water.style.display = "block";
  } else {
    water.style.display = "none";
  }
}
function repair_expand() {
  if (repair.style.display != "block") {
    repair.style.display = "block";
  } else {
    repair.style.display = "none";
  }
}
function cost_expand() {
  if (cost.style.display != "block") {
    cost.style.display = "block";
  } else {
    cost.style.display = "none";
  }
}
function postal_expand() {
  if (postal.style.display != "block") {
    postal.style.display = "block";
  } else {
    postal.style.display = "none";
  }
}
function marketing_expand() {
  if (marketing.style.display != "block") {
    marketing.style.display = "block";
  } else {
    marketing.style.display = "none";
  }
}
function misc_expand() {
  if (misc.style.display != "block") {
    misc.style.display = "block";
  } else {
    misc.style.display = "none";
  }
}

function buss() {
  var group_bussiness = document.getElementById("group-bussiness");
  var name = document.getElementById("name");
  if (group_bussiness.style.display != "block" && name.value != "") {
    group_bussiness.style.display = "block";
  }
}
function need() {
  var group_need = document.getElementById("group-need");
  var manufacturing = document.getElementById("manufacturing");
  var service = document.getElementById("service");
  var agriculture = document.getElementById("agriculture");
  var other = document.getElementById("other");
  if (
    group_need.style.display != "block" &&
    (manufacturing.checked ||
      service.checked ||
      agriculture.checked ||
      other.checked)
  ) {
    group_need.style.display = "block";
  } else {
    alert("please select the option");
  }
}
function expense() {
  var group_expense = document.getElementById("group-expense");

  if (
    group_expense.style.display != "block" &&
    (land.value != "" ||
      machinery.value != "" ||
      shed.value != "" ||
      expenditure.value != "" ||
      computer.value != "" ||
      furniture.value != "" ||
      electricity.value != "" ||
      racks.value != "" ||
      vehicle.value != "" ||
      software.value != "")
  ) {
    group_expense.style.display = "block";
  } else {
    alert("please select an option");
  }
}
function cap() {
  var group_capital = document.getElementById("group-capital");
  if (
    group_capital.style.display != "block" &&
    (rent.value != "" ||
      salary.value != "" ||
      purchase.value != "" ||
      stationary.value != "" ||
      water.value != "" ||
      repair.value != "" ||
      cost.value != "" ||
      postal.value != "" ||
      marketing.value != "" ||
      misc.value != "")
  ) {
    group_capital.style.display = "block";
  } else {
    alert("please select an option");
  }
}
function final() {
  var capital = document.getElementById("capital");
  if (capital.value != "") {
    alert("submitted");
  }
}
