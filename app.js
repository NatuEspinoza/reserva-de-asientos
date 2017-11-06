//declarar un array que representara los asientos del avion con false indicando que estos están vacíos
//asiento ocupado = true

var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

//contador que nos ayudara a rastrear el número de asientos ocupados

var busySeats = 0;

var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats');

  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    //del primer elemento al 4to, en el arreglo va ser 1ra clase(del indice 0 al 3)
    if(i<4) {
      seat.style.background = '#f7f506';
    } else {
      seat.style.background = '#f18760';
    }
    containerSeats.appendChild(seat);
  }
};

var reserve = function(){
  var button = document.getElementById('button');
  button.addEventListener('click', chooseZone);
};

var chooseZone = function() {
  var choice = prompt('En que zona prefieres reservar. \n 1.Primera Clase \n 2.Clase Económica \n (Ingresa el número de tu preferencia)');

  if(choice == 1) {
    checkFirstClassZone();
  } else if (choice == 2) {
    checkEconomicZone();
  } else {
    alert('Por favor ingresa número válido')
  }
};

var checkFirstClassZone = function(){
  var zone = 'Primera Clase'
  //recorre del elemento 0 al 3 y verifica los asientos que estan disponibles
  for (var index = 0; index < 4; index++) {
    if(airlineSeats[index] == false){
      airlineSeats[index] = true;
      reserveSeat(index);
      //al reservar un asiento no necesitamos seguir recorriendo el arreglo
      //rompemos el for con break
      break;
    } else if(index == 3 && airlineSeats[index] == true){
      reasignEconomicZone();
    }
  }
};

var checkEconomicZone = function(){
  var zone = 'Clase Económica';
  for (var index = 4; index < 10; index++) {
      if(airlineSeats[index] == false){
        airlineSeats[index] = true;
        reserveSeat(index);
        break;
      } else if (index == 9 && airlineSeats[index] == true) {
        reasignFirstClassZone();
    }
  }
};

var reserveSeat = function(indexToPaint){
  var seat = document.getElementsByClassName('seats');
  seat[indexToPaint].textContent = 'Ocupado';
};

var reasignEconomicZone = function(zone){
  var resign = confirm('Ya no quedan asientos disponibles en ' + clase económica + ' :(  \n Quieres reservar en Clase economica?');
  if(reasign == true){
    checkEconomicZone();
  } else {
    nextFlight();
  }
};

var reasignFirstClassZone = function(zone){
  var resign = confirm('Ya no quedan asientos disponibles en ' + primera clase + ' :(  \n Quieres reservar en Primera Clase?');
  if(reasign == true){
    checkFirstClassZone();
  } else {
    nextFlight();
  }
};

var paintTicket = function(index, zone){
  var containerTickets = document.getElementById('tickets');
  var ticket = document.createElement('div');
  ticket.className = 'seats';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent= 'PASE DE ABORDAR';
  reservedSeating.textContent ='No de Asiento: ' + (index + 1);
  zoneClass.textContent = zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
};

var nextFlight = function (){
  alert('Nuestro próximo vuelo sale en 3 horas');
};

paintSeats(airlineSeats);
reserve();
