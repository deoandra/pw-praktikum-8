filterSelection(null);

function filterSelection(key) {
  console.log(key);
  $.getJSON("./data.json", function (data) {
    let menu = data.menu;

    if (key) {
      menu = menu.filter(function (value) {
        return value.jenis === key;
      });
    }

    $("#post-card")
      .empty()
      .append(
        menu.map(function (each) {
          return `<div class="col-md-3">
                  <div class="card border-dark mb-3" style="max-width: 18rem;">
                  <img src=${each.gambar} class="card-img-top mx-auto" style="width:100px; height:100px"/>
                    <div class="card-body text-dark">
                      <h5 class="card-title">${each.nama}</h5>
                      <p class="card-text">${each.deskripsi}</p> </br> 
                      <p class="card-text">Harga : ${each.harga}</p> </br>
                      <p class="card-text">Esitmasi : ${each.estimasi}</p>
                    </div>
                    <button type="button" class="btn btn-primary mx-auto m-2" style="width: 50%; ">Pesan Sekarang</button>
                  </div>
                </div>`;
        })
      );
  });
}
