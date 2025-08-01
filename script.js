function toRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

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

fetch('data/data.json')
  .then(response => response.json())
  .then(data => {

    // PROFIL MEMBER
    const profilesContainer = document.getElementById('profiles-container');

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

      profilesContainer.appendChild(card);
    });

    //HARGA PAKET
    const salesContainer = document.getElementById('sales-container');

    data.price.forEach(price => {
      const list = price.fasilitas.map(fasilitas => {
        return `<li>${fasilitas}</li>`;
      }).join('');
      const content = document.createElement("div");
      content.classList.add("content");
      content.innerHTML = `
        <div class="price-title">
          <h1>${price.nama_paket}</h1>
        </div>
        <h3>${toRupiah(price.harga)}</h3>
        <ul>
        ${list}
        </ul>
      `
      const button = document.createElement("div");
      button.classList.add("button-container");
      button.innerHTML = ` 
        <a href="https://wa.me/${data.phone_number}?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20layanan%20Anda" target="_blank">
          <button class='button-template'>Chat Sekarang</button>
        </a>
`;


      salesContainer.appendChild(content);
      content.appendChild(button);
    });
  })
  .catch(err => {
    console.error("Gagal mengambil data profil:", err);
});