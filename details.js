      // Detail Page content
      document.addEventListener("DOMContentLoaded", function () {
        // Dapatkan nilai parameter 'id' dari URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");

        const getDetailDataById = (id) => {
          const detailData = {
            1: {
              name: "page name 1",
              url: "https://page1Test.com",
              description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
              instagram: null,
              youtube: null,
              tiktok: "https://www.tiktok.com/@userTest1",
            },
            2: {
              name: "page name 2",
              url: "https://page2Test.com",
              description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
              instagram: "https://www.instagram.com/UserTest2/",
              youtube: "https://www.youtube.com/user/UserTest2",
              tiktok: null,
            },
            3: {
              name: "page name 3",
              url: "https://page3Test.com",
              description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
              instagram: null,
              youtube: "https://www.youtube.com/user/UserTest3",
              tiktok: "https://www.tiktok.com/@userTest3",
            },
            4: {
              name: "page name 4",
              url: "https://page4Test.com",
              description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
              instagram: "https://www.instagram.com/UserTest4/",
              youtube: null,
              tiktok: "https://www.tiktok.com/@userTest4",
            },
            5: {
              name: "page name 5",
              url: "https://page5Test.com",
              description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et saepe accusantium labore repellat iste aperiam quia magni sint iusto laudantium!",
              instagram: "https://www.instagram.com/UserTest5/",
              youtube: "https://www.youtube.com/user/UserTest5",
              tiktok: null,
            },
          };

          return detailData[id] || null;
        };

        const detailData = getDetailDataById(id);

        const fillContent = (data) => {
          // Dapatkan elemen di halaman
          const detailContent = document.getElementById("detail-content");

          const header = document.createElement("h5");
          header.textContent = `Name : ${data.name}`;
          header.classList.add("card-header");

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title");
          cardTitle.textContent = "Description";

          const cardText = document.createElement("p");
          cardText.classList.add("card-text");
          cardText.textContent = data.description;

          const ul = document.createElement("ul");
          if (data.instagram) {
            const instagramListItem = document.createElement("li");
            instagramListItem.textContent = `Instagram : `;
            const link = document.createElement("a");
            link.href = data.instagram;
            link.textContent = data.instagram;
            instagramListItem.appendChild(link);
            ul.appendChild(instagramListItem);
          }

          if (data.youtube) {
            const youtubeListItem = document.createElement("li");
            youtubeListItem.textContent = `Youtube : `;
            const link = document.createElement("a");
            link.href = data.youtube;
            link.textContent = data.youtube;
            youtubeListItem.appendChild(link);
            ul.appendChild(youtubeListItem);
          }

          if (data.tiktok) {
            const tiktokListItem = document.createElement("li");
            tiktokListItem.textContent = `TikTok : `;
            const link = document.createElement("a");
            link.href = data.tiktok;
            link.textContent = data.tiktok;
            tiktokListItem.appendChild(link);
            ul.appendChild(tiktokListItem);
          }

          const btnPrimary = document.createElement("a");
          btnPrimary.href = "index.html";
          btnPrimary.classList.add("btn", "btn-primary", "ml-auto");
          btnPrimary.textContent = "Back To Table";
          btnPrimary.style.marginLeft = "75vw";

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          cardBody.appendChild(ul);
          cardBody.appendChild(btnPrimary);

          detailContent.appendChild(header);
          detailContent.appendChild(cardBody);
        };

        // Tampilkan konten detail sesuai dengan ID
        if (detailData) {
          fillContent(detailData);
        } else {
          detailContent.textContent = "Detail tidak ditemukan";
        }
      });