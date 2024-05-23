const headerHTML = `
<header style="background-color: #275F2E; color: #fff; padding: 20px;">
    <div class="container">
        <h1>Header de mi página web</h1>
    </div>
</header>
`;

const headerContainer = document.createElement('div');
headerContainer.innerHTML = headerHTML;

document.body.insertBefore(headerContainer, document.body.firstChild);