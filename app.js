// Target Elements
const displayColorContainers = document.querySelectorAll('.color-display')
const colorInput = document.getElementById('color-input')
const colorSchemeInput = document.getElementById('color-scheme')
const getColorSchemeBtn = document.getElementById('get-color-scheme')

// Initialisations
let currentScheme
let currentColor

// Event Listeners
colorInput.addEventListener('change', () => currentColor = (colorInput.value).slice(1))

colorSchemeInput.addEventListener('change', () => currentScheme = colorSchemeInput.value)


/* Fetch color scheme
Base URL: https://www.thecolorapi.com/
Endpoints: /scheme
Query Strings Example: hex=0047AB&format=html&mode=analogic&count=6 */

getColorSchemeBtn.addEventListener('click', function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${currentScheme}&count=5`)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < 5; i++) {
            console.log(data.colors[i].hex.value)
            displayColorContainers[i].style.backgroundColor = data.colors[i].hex.value
        }
    })
})

