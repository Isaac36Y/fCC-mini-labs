const textInput = document.querySelector("#markdown-input")
const rawHTML = document.querySelector("#html-output")
const preview = document.querySelector("#preview")


const convertMarkdown = () => {
	let text = textInput.value;
	rawHTML.textContent = text
	.replace(/^(#{3}\s)(.*)/gm, "<h3>$2</h3>")
	.replace(/^(#{2}\s)(.*)/gm, "<h2>$2</h2>")
	.replace(/^(#\s)(.*)/gm, "<h1>$2</h1>")
	.replace(/\*{2}(.*)\*{2}|_{2}(.*)_{2}/gm, "<strong>$1$2</strong>")
	.replace(/\*(.*)\*|_(.*)_/gm, "<em>$1$2</em>")
	.replace(/!\[(.*)\]\((.*)\)/gm, '<img alt="$1" src="$2">')
	.replace(/\[(.*)\]\((.*)\)/gm, '<a href="$2">$1</a>')
	.replace(/^(>\s)(.*)/gm, "<blockquote>$2</blockquote>")
	preview.innerHTML = rawHTML.textContent
	return rawHTML.textContent
}

textInput.addEventListener("input", () => convertMarkdown())
