const uSet = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lSet = "abcdefghijklmnopqrstwxyz";
const numSet = "0123456789";
const symSet = "!@#$%^&*()";
//Selectors
const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const uinput = document.getElementById("upper-case");
const linput = document.getElementById("lower-case");
const numinput = document.getElementById("numbers");
const syminput = document.getElementById("symbols");
const btn = document.getElementById("btn");

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};
const genratePassword = (password = "") => {
  if (uinput.checked) {
    password += getRandomData(uSet);
  }
  if (linput.checked) {
    password += getRandomData(lSet);
  }
  if (numinput.checked) {
    password += getRandomData(numSet);
  }
  if (syminput.checked) {
    password += getRandomData(symSet);
  }
  if (password.length <= totalchar.value) {
    return genratePassword(password)
  }
  let gpass = truncateString(password,totalchar.value)
  console.log(gpass);
  passbox.innerText = `${gpass}`
  navigator.clipboard.writeText(gpass);
};
genratePassword();
btn.addEventListener("click", () => {
  genratePassword();
});

function truncateString(str,num) {
    if (str.length > num) {
        let subStr = str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}