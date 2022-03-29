export function dateIsValid(day, month, year, dateValue) {
  return Number(day) <= 31 &&
    Number(month) <= 12 &&
    Number(year) >= 1900 &&
    Number(year) < 2015 &&
    dateValue.length === 10
    ? true
    : false;
}

export function emailIsValid(emailValue) {
  return emailValue.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) &&
    emailValue.length < 50 &&
    emailValue.split("@")[1] !== "yandex.com" &&
    emailValue.split("@")[1] !== "yandex.co" &&
    emailValue.split("@")[1] !== "gmail.ru" &&
    emailValue.split("@")[1] !== "gmail.co" &&
    emailValue.split("@")[1] !== "mail.co" &&
    emailValue.split("@")[1] !== "mail.com"
    ? true
    : false;
}

export function nameIsValid(nameValue) {
  return nameValue.match(
    /^[А-ЯЁA-Z][а-яёa-z]{0,}([-][А-ЯЁA-Z][а-яёa-z]{0,})?\s[А-ЯЁA-Z][а-яёa-z]{0,}([-][А-ЯЁA-Z][а-яёa-z]{0,})?/
  ) && nameValue.length < 50
    ? true
    : false;
}

export function phoneIsValid(phoneValue) {
  return phoneValue.length === 18 ? true : false;
}
