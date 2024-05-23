const footerHTML = `
<footer style="background-color: #EA5607; color: #fff; padding: 20px; position: fixed; bottom: 0; width: 100%; text-align: center">
    <div class="container">
        <h3>Footer de prueba para la actividad.</h3>
        <h4>Federico Palacio Allende</h4>
    </div>
</footer>
`;

const footerContainer = document.createElement('div');
footerContainer.innerHTML = footerHTML;

document.body.appendChild(footerContainer);