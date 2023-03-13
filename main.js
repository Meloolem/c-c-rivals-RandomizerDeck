function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }

let commander = document.querySelector("#commander");
let units = document.querySelector("#units");
let fraction__choise = document.querySelector("#fraction__choise");

let fraction;
let сGDI = ['Стронрам','Ляйн','Манкил','Саломон','Джексон'];

let сNOD = ['Сет','Кейн','Джейд','Оксана'];

document.querySelector("#button-random").onclick = function(){
    let uGDI = ['Стрелки','Взвод РПГ','Пулемётчики','Реактивная пехота','Группа Удар','Снайперы','Гренадер','Псы войны','Носорог','МЦП','Пидбуль','Громовержец','Торнадо','РС30','Танк Хищник','БТР','Таран','Рой доронов','Беркут','Штурмовик Могавк','Вепрь','Косатка','Молот','Бомбордировщик Косатка','Росомаха','Дезинтегратор','Джагернаут','Сокрушитель','Кадьяк','Самум','Титан','Танк Мамонт'];
    let uNOD = ['Боевик', 'Лазерный отряд', 'Фанатик', 'Падальщик', 'Огнеметчики', 'Скарабеи','Химические войны','Мутант-марадер','Киберколесо','Штурмоциклы','Багги','Багги РХБ','Танк Скорпион','Танк Клещ','Гигапушка','Танк-невидимка','Лазеный дрон','Банши','Москит','Штурмовик с катализатором','Сумрак','Инферно','Фантом','Вдавадел','Огнеметный танк','Центурион','Духовник','Артиллелия','Василиск','Скальный червь','Киборг',"Аватар"];
    console.log(uNOD)
    if((random(0, 1)) == 0){fraction = 'ГСБ'} 
    else{fraction = 'НОД'}

    if(fraction == 'ГСБ') {
      fraction__choise.textContent = 'ГСБ';
      commander.textContent = сGDI[random(0,4)]
    } 
    else{
      fraction__choise.textContent = 'НОД';
      commander.textContent = сNOD[random(0,3)]
    }

    if(fraction == 'ГСБ') {
        units.textContent = uGDI.splice([random(0,31)],1) + ',   ' + uGDI.splice([random(0,30)],1) + ',   ' + uGDI.splice([random(0,29)],1) + ',   ' + uGDI.splice([random(0,28)],1) + ',   ' + uGDI.splice([random(0,27)],1) + ',   ' + uGDI.splice([random(0,26)],1)
    } else{ units.textContent = uNOD.splice([random(0,31)],1) + ',   ' + uNOD.splice([random(0,30)],1) + ',   ' + uNOD.splice([random(0,29)],1) + ',   ' + uNOD.splice([random(0,28)],1) + ',   ' + uNOD.splice([random(0,27)],1) + ',   ' + uNOD.splice([random(0,26)],1)}
  }