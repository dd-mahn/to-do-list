import createDetail from "../../component/Layout/createDetail";
import closeThis from "../common/closeThis";
import executeWithAnimation from "../common/executeWithAnimation";
import openThis from "../common/openThis";

export function detailHandler() {
  const detail = document.querySelector(".detail");
  const closeBtn = detail.querySelector(".close__btn");

  closeBtn.addEventListener("click", () => {
    closeDetail();
  });
}

export function changeDetail(obj) {
  const container = document.querySelector(".container");
  const oldDetail = container.querySelector(".detail");
  const newDetail = createDetail(obj);

  if (oldDetail !== null) {
    container.removeChild(oldDetail);
    container.appendChild(newDetail);
    openThis(newDetail);
  } else {
    container.appendChild(newDetail);
  }
}

export function openDetail() {
  const detail = document.querySelector(".detail");
  const detailOpen = isDetailOpen();
  if (!detailOpen) {
    detail.setAttribute("opening", "");
    openThis(detail);
    detailHandler();
  } else {
    detail.removeAttribute("opening");
    detail.setAttribute("open", "");
    openThis(detail);
    detailHandler();
  }
}

export function closeDetail() {
  const detail = document.querySelector(".detail");
  executeWithAnimation(detail, () => {
    closeThis(detail);
    detail.parentElement.removeChild(detail);
  });
}

export function isDetailOpen() {
  const detail = document.querySelector(".detail");
  if (detail === null) {
    return false;
  } else if (!detail.classList.contains("d-off")) {
    return true;
  } else {
    return false;
  }
}
