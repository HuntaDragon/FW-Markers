const freightWatch = document.querySelector(".freightWatch");
const body = document.querySelector(".body");

//сласс створеня вантажа
class Load {
  constructor(freightBill, billOfLanding, dispatchNotes, type) {
    this.freightBill = freightBill;
    this.billOfLanding = billOfLanding;
    this.dispatchNotes = dispatchNotes;
    this.type = type;
  }
  createLoad() {
    const load = document.createElement("div");
    load.classList.add(`load`);
    load.classList.add(this.type);
    freightWatch.append(load);
    //категорії інформації на вантажі
    const firstEmptyBlock = document.createElement("div");
    firstEmptyBlock.classList.add("empty_block");
    load.append(firstEmptyBlock);

    const freightBL = document.createElement("div");
    freightBL.classList.add("freightBill_block");
    freightBL.textContent = this.freightBill;
    load.append(freightBL);

    const billOfLanding = document.createElement("div");
    billOfLanding.classList.add("bill_of_landing");
    billOfLanding.textContent = this.billOfLanding;
    load.append(billOfLanding);

    const dispatchNotes = document.createElement("div");
    dispatchNotes.classList.add("dispatch_notes");
    dispatchNotes.textContent = this.dispatchNotes;
    load.append(dispatchNotes);

    load.addEventListener("click", openModalWindow);
  }
}
//класс модального вікна картки вантажа
class LoadCard {
  constructor(FB, BOL, dispNotes) {
    this.FB = FB;
    this.BOL = BOL;
    this.dispNotes = dispNotes;
  }
  createLoadCard() {
    //cтворє бекграунд картки
    const modalBackground = document.createElement("div");
    modalBackground.classList.add("modal_background");
    body.append(modalBackground);
    //створює картку
    const modalWindow = document.createElement("div");
    modalWindow.classList.add("modal_window");
    modalBackground.append(modalWindow);

    //створює блоки картки
    const modalBlok1 = document.createElement("div");
    modalBlok1.classList.add("modal_blok");
    modalWindow.append(modalBlok1);
    // modalBlok1.textContent = this.FB;

    //створює блок з FB і BOL
    const block1Info = document.createElement("div");
    block1Info.classList.add("block_1_info");
    modalBlok1.append(block1Info);

    const FBinfo = document.createElement("div");
    FBinfo.classList.add("FB_info");
    // FBinfo.textContent = `/* FB# ${this.FB}`;
    FBinfo.textContent = this.FB;

    block1Info.append(FBinfo);

    const BOLinfo = document.createElement("div");
    BOLinfo.classList.add("BOL_info");
    BOLinfo.textContent = `BOL# ${this.BOL}`;
    block1Info.append(BOLinfo);

    //створює блок з діспач ноутс
    const block2DN = document.createElement("div");
    block2DN.classList.add("block_2_DN");
    block2DN.textContent = this.dispNotes;
    modalBlok1.append(block2DN);

    //створює блок з кнопкой
    const block3Button = document.createElement("div");
    block3Button.classList.add("block_3_button");
    modalBlok1.append(block3Button);

    const modalBlok2 = document.createElement("div");
    modalBlok2.classList.add("modal_blok");
    modalWindow.append(modalBlok2);

    const modalBlok3 = document.createElement("div");
    modalBlok3.classList.add("modal_blok");
    modalWindow.append(modalBlok3);

    //створює кнопку
    const modalButton = document.createElement("button");
    modalButton.classList.add("modal_button");
    modalButton.textContent = "EDIT";
    block3Button.append(modalButton);
    modalButton.addEventListener("click", this.openChangeModal);
  }
  openChangeModal() {
    const cangeModalBackground = document.createElement("div");
    cangeModalBackground.classList.add("cange_modal_background");
    body.append(cangeModalBackground);

    const changeModalWindow = document.createElement("div");
    changeModalWindow.classList.add("change_modal_window");
    cangeModalBackground.append(changeModalWindow);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close_btn");
    closeBtn.textContent = "close";
    closeBtn.addEventListener("click", closeChangeModal);
    changeModalWindow.append(closeBtn);

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save_btn");
    saveBtn.textContent = "save";
    saveBtn.addEventListener("click", saveChangeModal);
    changeModalWindow.append(saveBtn);
  }
}
//кнопка зі збереженням апдейту
function saveChangeModal() {
  let closemodal = document.querySelector(".cange_modal_background");
  closemodal.remove();
}
//кнопка закриття поля для апдейтів
function closeChangeModal() {
  let closemodal = document.querySelector(".cange_modal_background");
  closemodal.remove();
}
//відкриває модальне вікно зі збереженням інформації
function openModalWindow() {
  freightWatch.onclick = function (e) {
    let loads = e.target.closest(".load");
    if (!loads) return;
    let FB = loads.querySelector(".freightBill_block");
    let BOL = loads.querySelector(".bill_of_landing");
    let dispNotes = loads.querySelector(".dispatch_notes");
    let openCard = new LoadCard(
      FB.textContent,
      BOL.textContent,
      dispNotes.textContent
    );
    openCard.createLoadCard();
  };
}
//закриває модальне вікно при натисканні поза його межами
window.onclick = function (e) {
  let modals = document.querySelector(".modal_background");
  if (e.target == modals) {
    modals.remove();
  }
};

setTimeout(downloading, 2000); //завантаження вантажів

function downloading() {
  //створені для прикладу вантажі
  const load1 = new Load(14578, "AW2342", "PUPA AND LUPA LLS", "pink");
  load1.createLoad();
  const load2 = new Load(29834, "PL34453", "PUPA AND LUPA LLS", "pink");
  load2.createLoad();
  const load3 = new Load(36805, "FA32423", "PUPA AND LUPA LLS", "pink");
  load3.createLoad();

  const load4 = new Load(21238, "TT43356", "PUPA AND LUPA LLS", "yellow");
  load4.createLoad();
  const load5 = new Load(85495, "PH32434", "PUPA AND LUPA LLS", "yellow");
  load5.createLoad();
  const load6 = new Load(34636, "RA34575", "PUPA AND LUPA LLS", "yellow");
  load6.createLoad();
  const load7 = new Load(45673, "AL55632", "PUPA AND LUPA LLS", "yellow");
  load7.createLoad();
  const load8 = new Load(57236, "TN96834", "PUPA AND LUPA LLS", "yellow");
  load8.createLoad();

  const load9 = new Load(23893, "TX45323", "PUPA AND LUPA LLS", "green");
  load9.createLoad();
  const load10 = new Load(87237, "MO96843", "PUPA AND LUPA LLS", "green");
  load10.createLoad();
  const load11 = new Load(67432, "WA03245", "PUPA AND LUPA LLS", "green");
  load11.createLoad();
  const load12 = new Load(35642, "PA10432", "PUPA AND LUPA LLS", "green");
  load12.createLoad();
  const load13 = new Load(13431, "AZ89402", "PUPA AND LUPA LLS", "green");
  load13.createLoad();
  const load14 = new Load(64855, "OK74220", "PUPA AND LUPA LLS", "green");
  load14.createLoad();
  return;
}
