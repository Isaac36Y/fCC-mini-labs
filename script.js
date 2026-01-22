const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const orderNumberInput = document.querySelector("#order-no");
const productCodeInput = document.querySelector("#product-code");
const quantityInput = document.querySelector("#quantity");
const complaintFieldset = document.querySelectorAll("#complaints-group [type='checkbox']");
const complaintDescriptionInput = document.querySelector("#complaint-description");
const solutionFieldSet = document.querySelectorAll("#solutions-group [type='radio']");
const solutionDescriptionInput = document.querySelector("#solution-description");
const submitButton = document.querySelector("#submit-btn");
const messageBox = document.querySelector("#message-box")
const form = document.querySelector("#form");


const validateForm = () => {
	const object = {}
	object["full-name"] = (nameInput.value.length >= 1)
	object["email"] = /.+\@.+\..+/.test(emailInput.value);
	object["order-no"] = /2024\d{6}$/.test(orderNumberInput.value);
	object["product-code"] = /[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d/.test(productCodeInput.value);
	object["quantity"] = (Number.isInteger(+quantityInput.value) && +quantityInput.value > 0);
	object["complaints-group"] = [...complaintFieldset].some(a => a.checked);
	object["solutions-group"] =  [...solutionFieldSet].some(a => a.checked);
	if (document.querySelector("#other-complaint").checked) {
		object["complaint-description"] = complaintDescriptionInput.value.length > 20
	}
	if (document.querySelector("#other-solution").checked) {
		object["solution-description"] = solutionDescriptionInput.value.length > 20
	}

	return object
}

Object.keys(validateForm()).forEach(key => {
	const element = document.querySelector(`#${key}`)
	element.addEventListener("change", () => {	
		if (validateForm()[key] === true) {
		element.style.borderColor = "yellow"
		}else if (validateForm()[key] === false) {
		element.style.borderColor = "red"
		}
	})
		
}) 


const isValid = (obj) => {
	return Object.keys(obj).every(key => key === true)
}



form.addEventListener("submit", () => {
	isValid(validateForm())
}
)


