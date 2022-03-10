const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); //loops over each input and listens for a change. this is then logged.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); 