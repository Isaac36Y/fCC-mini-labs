const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

const getFlags = () => {
  let flag = ""
  if (caseInsensitiveFlag.checked) {
    flag += "i"
  }
  if (globalFlag.checked) {
    flag += "g"
  }
  return flag
}

const highlight = () => {
  let newRegex = new RegExp(regexPattern.value, getFlags())
  let matchingChar = stringToTest.textContent.match(newRegex)
	console.log(stringToTest, stringToTest.textContent, stringToTest.value)
	/* console.log(matchingChar, Array.isArray(matchingChar), typeof matchingChar) */
  if (!getFlags().includes("g")) {
	let match = matchingChar ? machingChar[0] : ""
	return stringToTest.innerHTML = stringToTest.textContent.replace(matchingChar, `<span class="highlight">${match}</span>`)
  }else {
	return stringToTest.innerHTML = stringToTest.textContent.replace(newRegex, (m) => `<span class="highlight">${m}</span>`)
  }
}

testButton.addEventListener("click", () => highlight())

