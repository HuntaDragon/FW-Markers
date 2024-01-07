let p = new Promise((resolve, reject) => {
  let interval = setInterval(() => {
    const find = document.querySelector(".green");
    if (find !== null) {
      clearInterval(interval);
      resolve();
    }
  }, 1000);
});

p.then(() => {
  //==============================================
  //проміс перевіряє чи існує кнопка save в дом древі і якщо так регеструє клік по ній
  let chooseSaveBtn = new Promise((resolve) => {
    let markerInterval = setInterval(() => {
      let marker = document.querySelector(".save_btn"); // кнопка save update
      if (marker !== null) {
        // console.log("found");
        marker.onclick = function () {
          saveLoad();
        };
      }
    }, 500);
  });

  //перевіряє чи є у локал стораже масив з номерами, якщо не має то створює його, якщо є то updatedLoads приймає дані з локала
  if (localStorage.getItem("updated") == null) {
    updatedLoads = [];
    localStorage.setItem("updated", JSON.stringify(updatedLoads));
  } else {
    updatedLoads = localStorage.getItem("updated");
    updatedLoads = JSON.parse(updatedLoads);
  }

  //зберігає оновлений вантаж у массив updatedLoads та у локал сторадж
  function saveLoad() {
    let savedFB = document.querySelector(".FB_info"); // блок з FB# у картці вантажу
    updatedLoads.push(Number(savedFB.textContent));
    localStorage.setItem("updated", JSON.stringify(updatedLoads));
    console.log(updatedLoads);

    return updatedLoads;
  }
  // console.log(updatedLoads);

  function getUpdatedLoads() {
    //перевіря чи є фб у массиві і додає класс updated
    let int = setInterval(() => {
      let findFB = document.querySelectorAll(".freightBill_block"); // блок з FB# на діспаче
      for (let elem of findFB) {
        if (updatedLoads.includes(Number(elem.textContent))) {
          elem.classList.add("updated");
        }
      }
    }, 1000);
  }
  function removeLoads() {
    let findFB = document.querySelectorAll(".freightBill_block"); // блок з FB# на діспаче

    let int = setInterval(() => {
      let arr = [];
      for (let el of findFB) {
        arr.push(Number(el.textContent));
        // console.log(Number(el.textContent));
      }
      // console.log(arr);
      for (let elem of updatedLoads) {
        if (!arr.includes(elem)) {
          // elem.remove();
          updatedLoads.splice(updatedLoads.indexOf(elem), 1);
          localStorage.setItem("updated", JSON.stringify(updatedLoads));
        }
      }
    }, 1000);
  }
  removeLoads();
  getUpdatedLoads();
});
