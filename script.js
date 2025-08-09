function toRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

//SERVICES
const abtServices = document.getElementById("abt-content-list");

fetch('data/services.json')
  .then(response => response.json)
  .then(data => { 
    data.forEach(services => { 

    })
  })
  .catch(err => { 'error fetch', err})
//SIDEBAR
function closeSidebar() { 
  const sidebar = document.getElementById('sidebar');
  sidebar.style.transform = 'translate(-20rem, 0)'; 
}

function openSidebar(){ 
  const sidebar = document.getElementById('sidebar');
  sidebar.style.transform = 'translate(0, 0)'; 
}

//FETCH DATA PROFIL
fetch('data/profile.json')
  .then(response => response.json())
  .then(data => {
    // PROFIL MEMBER
  const profilesContainer = document.getElementById("profileContainer");
    console.log(data.profiles);
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
  })
.catch(err => {
  console.error("Gagal mengambil data profil:", err);
});
//FETCH DATA HARGA
fetch('data/price.json')
  .then(response => response.json())
  .then(data => {
    const salesContainer = document.getElementById('sales-container');
    //BUAT UL UNTUK FASILITAS
    data.price_list.forEach(price => {
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
        <a href="https://wa.me/${data.phone_number}?text=Halo%2C%20Halo%20walawe%20aku%20hibban" target="_blank">
          <button class='button-template'>Beli</button>
        </a>
        `;
      salesContainer.appendChild(content);
      content.appendChild(button);
    });
  }).catch(err => {
      'Gagal Ambil data harga', err
  });

  //FETCH DATA GALLERY
fetch("data/image.json")
  .then(response => response.json())
  .then(data => {
    //GALLERY
    const imageContainer = document.getElementById("image-container");

    data.imageList.forEach(image => {
      const contentImage = document.createElement("div");
      contentImage.classList.add("image");
      contentImage.innerHTML = `
        <div class="images-wrapper">
          <img src="${image}"/>
        </div>
      `;
      imageContainer.appendChild(contentImage);
    });
  })
.catch(err => {
  console.error("Gagal mengambil data profil:", err);
});