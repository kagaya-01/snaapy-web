
function toRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

console.log(toRupiah(75000)); // Output: Rp75.000


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('profiles-container');

    data.profiles.forEach(profile => {
      const bars = profile.background_colors.map(color => {
        return `<div style="background: ${color}"></div>`;
      }).join('');

      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="image-wrapper">
          <div class="background-bars">
            ${bars}
          </div>
          <img class="profile-image" src="${profile.image}" alt="${profile.name}" />
        </div>
        <div class="info">
          <div class="name">${profile.name}</div>
          <div class="title">${profile.title}</div>
          <div class="desc">${profile.description}</div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Gagal mengambil data profil:", err);
  });

  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('sales-container');

    data.price.forEach(price => {
      
      const content = document.createElement("div");
      content.classList.add("content");
      content.innerHTML = `
        <div class="price-title">
          <h1>${price.nama_paket}</h1>
        </div>
        <h3>${toRupiah(price.harga)}</h3>
        <p></p>
      `
      container.appendChild(content);
    });
  })
  .catch(err => {
    console.error("Gagal mengambil data", err);
  });


function closeSidebar() { 
    close = document.getElementById("close-sidebar");
    sidebar = document.getElementById('sidebar');
    sidebar.style.transform = 'translate(-20rem, 0)'; 
}

function openSidebar() { 
    close = document.getElementById("open-sidebar");
    sidebar = document.getElementById('sidebar');
    sidebar.style.transform = 'translate(0, 0)'; 
}