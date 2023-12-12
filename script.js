const data = [
  {
    id: 1,
    name: "page name 1",
    url: "https://page1Test.com",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
    instagram: null,
    youtube: null,
    tiktok: "https://www.tiktok.com/@userTest1",
  },
  {
    id: 2,
    name: "page name 2",
    url: "https://page2Test.com",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
    instagram: "https://www.instagram.com/UserTest2/",
    youtube: "https://www.youtube.com/user/UserTest2",
    tiktok: null,
  },
  {
    id: 3,
    name: "page name 3",
    url: "https://page3Test.com",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
    instagram: null,
    youtube: "https://www.youtube.com/user/UserTest3",
    tiktok: "https://www.tiktok.com/@userTest3",
  },
  {
    id: 4,
    name: "page name 4",
    url: "https://page4Test.com",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
    instagram: "https://www.instagram.com/UserTest4/",
    youtube: null,
    tiktok: "https://www.tiktok.com/@userTest4",
  },
  {
    id: 5,
    name: "page name 5",
    url: "https://page5Test.com",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
    instagram: "https://www.instagram.com/UserTest5/",
    youtube: "https://www.youtube.com/user/UserTest5",
    tiktok: null,
  },
];

const fillTable = document.getElementById("fillTable");

// method for create check icon
function mediaCheck(row, data) {
  const cell = document.createElement("td");
  if (data) {
    // Jika ada, tambahkan ikon check
    const iconCheck = document.createElement("i");
    iconCheck.className = "bi bi-check-lg";
    cell.appendChild(iconCheck);
  }
  row.appendChild(cell);
}

// method for create detail link
function detailLink(row, id) {
  const cellDetail = document.createElement("td");
  const linkDetail = document.createElement("a");
  linkDetail.href = `details.html?id=${id}`;
  linkDetail.textContent = "Detail";
  cellDetail.appendChild(linkDetail);
  row.appendChild(cellDetail);
}

// method for create url link
function dataUrl(row, data) {
  const cellDetail = document.createElement("td");
  const linkDetail = document.createElement("a");
  linkDetail.href = data; // Sesuaikan dengan URL yang diinginkan
  linkDetail.textContent = data;
  cellDetail.appendChild(linkDetail);
  row.appendChild(cellDetail);
}

const dataRender = (data) => {
  fillTable.innerHTML = "";
  data.forEach((isi) => {
    // Buat elemen baris baru
    const row = document.createElement("tr");
    row.classList.add("list-table");
    // Tambahkan sel-sel dengan data dari objek JSON
    const cellNama = document.createElement("td");
    cellNama.textContent = isi.name;
    row.appendChild(cellNama);

    dataUrl(row, isi.url);

    const cellDescription = document.createElement("td");
    cellDescription.textContent = isi.description;
    cellDescription.classList.add("description");
    row.appendChild(cellDescription);

    mediaCheck(row, isi.instagram);
    mediaCheck(row, isi.youtube);
    mediaCheck(row, isi.tiktok);
    detailLink(row, isi.id);
    // Tambahkan baris ke tbody
    fillTable.appendChild(row);
  });
};

dataRender(data);

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const instagramCheckbox = document.getElementById("instagramCheckbox");
  const youtubeCheckbox = document.getElementById("youtubeCheckbox");
  const tiktokCheckbox = document.getElementById("tiktokCheckbox");

  function filterAndRenderData() {
    // Filter data berdasarkan kondisi checkbox dan input pencarian
    const filteredData = data
      .filter((isi) => {
        return (
          (instagramCheckbox.checked && isi.instagram) ||
          (youtubeCheckbox.checked && isi.youtube) ||
          (tiktokCheckbox.checked && isi.tiktok) ||
          (!instagramCheckbox.checked &&
            !youtubeCheckbox.checked &&
            !tiktokCheckbox.checked)
        );
      })
      .filter((isi) =>
        isi.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );

    // Panggil dataRender dengan data yang telah difilter
    dataRender(filteredData);
  }

  // Tambahkan event listener untuk setiap perubahan pada input pencarian
  searchInput.addEventListener("input", filterAndRenderData);
  // Tambahkan event listener untuk checkbox
  instagramCheckbox.addEventListener("change", filterAndRenderData);
  youtubeCheckbox.addEventListener("change", filterAndRenderData);
  tiktokCheckbox.addEventListener("change", filterAndRenderData);
});